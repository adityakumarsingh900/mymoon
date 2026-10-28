import http.server
import socketserver
import os
import urllib.parse

PORT = 5000
DIRECTORY = "/Users/adityakumarsingh/Documents/antigravity/noble-bose/downloaded"

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        
        # If accessing root or /karwa-chauth/demo, serve source_clean.html
        if path in ['/', '/karwa-chauth/demo', '/karwa-chauth', '/karwa-chauth/demo/']:
            self.send_response(200)
            self.send_header('Content-type', 'text/html; charset=utf-8')
            self.end_headers()
            with open('/Users/adityakumarsingh/Documents/antigravity/noble-bose/source_clean.html', 'rb') as f:
                self.wfile.write(f.read())
            return
            
        # Check if file exists in downloaded dir
        local_file = os.path.join(DIRECTORY, path.lstrip('/'))
        if not os.path.exists(local_file):
            print(f"[MISSING ASSET] {path}")
            
        return super().do_GET()

with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
    print(f"Serving at http://localhost:{PORT}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
