tell application "System Events"
  tell process "Finder"
    repeat 10 times
      tell application "Finder" to open trash
      tell application "Finder" to activate
      key code 126
      key down command
      key code 51
      key up command
      delay 0.2 -- adjust delay as needed
    end repeat
  end tell
end tell
