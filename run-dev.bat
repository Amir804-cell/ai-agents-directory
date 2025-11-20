@echo off
echo ========================================
echo AI Agents Directory - Setup and Run
echo ========================================
echo.

cd /d "%~dp0"

if not exist "node_modules\" (
    echo Installing dependencies...
    echo.
    call npm install
    echo.
)

echo Starting development server...
echo.
echo The app will open at: http://localhost:5173
echo.
echo Press Ctrl+C to stop the server
echo.

call npm run dev

pause
