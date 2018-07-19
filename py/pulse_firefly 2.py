# A micro:bit Firefly.
# By Nicholas H.Tollervey. Released to the public domain.
import radio
import random
import neopixel
from microbit import *

# Create the "flash" animation frames. Can you work out how it's done?
flash = [Image().invert()*(i/9) for i in range(9, -1, -1)]

# The radio won't work unless it's switched on.
radio.on()
radio.config(channel = 50)

np = neopixel.NeoPixel(pin0, 24)

# Event loop.
while True:
    # Button A sends a "flash" message.
    if button_a.was_pressed():
        radio.send('flash')
    elif random.randint(0, 10) <2
        radio.send('flash')
    
    # Read any incoming messages.
    incoming = radio.receive()
    if incoming == 'flash':
        # If there's an incoming "flash" message display
        # the firefly flash animation after a random short
        # pause.
        # sleep(random.randint(50, 350))
        display.show(flash, delay=100, wait=False)
        
        for pixel_id in range(0, len(np)):
            np[pixel_id] = (0, 75, 0)
            np.show()
        
        # Sleep for a hit before reboardcasting 
        sleep(1000)
        
        radio.send('flash') 
        
        for pixel_id in range(0, len(np)):
            np[pixel_id] = (0, 0, 0)
            np.show()