tell application "Finder" to open trash
delay 0.5
tell application "System Events"
  tell process "Finder"
    repeat 100 times
      tell application "Finder" to open trash
      tell application "Finder" to activate
      key code 126
      key down command
      key code 51
      key up command
      delay 0.2 -- adjust delay as needed
      tell application "Finder"
				if exists window 1 then
					if name of window 1 is not "Trash" then
						close window 1
					end if
				end if
			end tell
    end repeat
  end tell
end tell
