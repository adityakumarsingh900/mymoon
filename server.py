import http.server
import socketserver
import os
import urllib.parse
import sys

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    extensions_map = {
        **http.server.SimpleHTTPRequestHandler.extensions_map,
        '.js': 'application/javascript',
        '.mjs': 'application/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.avif': 'image/avif',
        '.webp': 'image/webp',
        '.mp3': 'audio/mpeg',
        '.mp4': 'video/mp4',
        '.svg': 'image/svg+xml',
    }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    do_HEAD = lambda self: self.do_GET()

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path.rstrip('/')

        # Support both /assets/photos/ and /photos/
        check_path = None
        if parsed.path.startswith('/assets/photos/'):
            check_path = parsed.path[len('/assets/photos/'):]
        elif parsed.path.startswith('/photos/'):
            check_path = parsed.path[len('/photos/'):]

        if check_path:
            target_file = os.path.join(DIRECTORY, 'photos', check_path)
            # Try exact match or alternate extensions (.jpg, .png, .jpeg, .webp)
            if not os.path.isfile(target_file):
                base, _ = os.path.splitext(target_file)
                for alt_ext in ['.jpg', '.jpeg', '.png', '.webp', '.JPG', '.PNG']:
                    if os.path.isfile(base + alt_ext):
                        target_file = base + alt_ext
                        break

            if os.path.isfile(target_file):
                self.send_response(200)
                ext = os.path.splitext(target_file)[1].lower()
                content_type = self.extensions_map.get(ext, 'image/jpeg')
                self.send_header('Content-type', content_type)
                self.end_headers()
                with open(target_file, 'rb') as f:
                    self.wfile.write(f.read())
                return

        # Serve index.html for root, /mymoon, and /karwa-chauth routes
        if path in ['', '/', '/mymoon', '/karwa-chauth/demo', '/karwa-chauth']:
            self.send_response(200)
            self.send_header('Content-type', 'text/html; charset=utf-8')
            self.end_headers()
            with open(os.path.join(DIRECTORY, 'index.html'), 'rb') as f:
                self.wfile.write(f.read())
            return

        # Ignore analytics/tracking requests silently
        if path in ['/~flock.js'] or path.startswith('/__l5e/events'):
            self.send_response(204)
            self.end_headers()
            return

        return super().do_GET()

if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else PORT
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", port), CustomHandler) as httpd:
        print(f"✨ Gift server running at: http://localhost:{port}")
        print("Press Ctrl+C to stop.")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")
