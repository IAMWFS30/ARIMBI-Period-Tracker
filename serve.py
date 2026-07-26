"""Local dev server for ARIMBI Period Tracker PWA."""
import http.server
import os

os.chdir(os.path.dirname(os.path.abspath(__file__)))
PORT = 8080

class Handler(http.server.SimpleHTTPRequestHandler):
    extensions_map = {
        **http.server.SimpleHTTPRequestHandler.extensions_map,
        '.js': 'application/javascript',
        '.json': 'application/json',
        '.svg': 'image/svg+xml',
        '.css': 'text/css',
        '.html': 'text/html',
        '.webmanifest': 'application/manifest+json',
    }

    def end_headers(self):
        # Allow service worker scope
        self.send_header('Service-Worker-Allowed', '/')
        super().end_headers()

print(f"\n🌸 ARIMBI Period Tracker v3.1")
print(f"   Local:   http://localhost:{PORT}")
print(f"   Network: http://[your-ip]:{PORT}")
print(f"   Press Ctrl+C to stop\n")

with http.server.HTTPServer(("0.0.0.0", PORT), Handler) as httpd:
    httpd.serve_forever()