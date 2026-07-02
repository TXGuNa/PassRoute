#!/bin/bash
# PassRoute — local preview server
# Double-click this file (or run it in Terminal). Stop with Ctrl+C.
cd "$(dirname "$0")"
echo ""
echo "  PassRoute local server starting..."
echo "  Open:  http://localhost:8080/home/"
echo "  Stop:  Ctrl+C"
echo ""
exec python3 -m http.server 8080
