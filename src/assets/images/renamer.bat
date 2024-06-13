@echo off
setlocal enabledelayedexpansion

set "directory=./"  REM Specify the directory containing the files
set "pattern=cocktails"  REM Specify the pattern to match

for %%F in ("%directory%*%pattern%*.jpg") do (
  set "filename=%%~nF"
  set "extension=%%~xF"
  set "newname=!filename:%pattern%=cocktails_!"
  ren "%%F" "!newname!!extension!"
  echo Renamed: "%%F" to "!newname!!extension!"
)

pause
