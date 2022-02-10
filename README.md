# PUSH THE BUTTON
A game exploring intentional linguistic ambiguity
Made as part of the course Currents: Playful Prototyping taught by Jason Li in the Art, Media & Technology department at Parsons School of Design


## **CONTEXT**

### THEME

Week 1’s theme is **Duality**. 

On my daily commute, I typically wear noise-cancelling ear buds. However, the other day, I went on a walk with a friend and was forced to recognize how loud the streets are. As someone sensitive to sound, the contrast between my usual sonic background (nearly white noise) and the unfiltered sounds of the city was particularly jarring. In this week’s prototype, I wanted to play with sound as central part of a game and use calming tones and harsh noises as opposing forces in my gameplay to emphasize the duality of sound.

### NOVEL INPUT

This week, I chose to explore using heart rate as an input in gameplay. 

## PRECEDENTS

### N64 TETRIS WITH BIO SENSOR (1998)

In 1998, Nintendo released a version of Tetris that takes input from the user’s N64 Bio Sensor, an ear clip accessory that monitors heart rate. The game of Tetris is then altered based on heart rate, but the degree to which the game changes is relatively negligible unless the user increases their heart rate dramatically.[1]

### STANFORD BOREDOM XBOX CONTROLLER (2014)

A Stanford electrical engineering lab modified an Xbox 360 controller such that it could measure “pulse or breathing rate”—Gregory Kovacs, a professor, and Corey McCall, a PhD candidate, attached a pulse oximeter to the controller. Extrapolating this data to make assumptions about blood pressure, Kovacs and McCall assert that the controller can detect boredom and that this detection could be useful in game design.[2]

### PULSE SENSOR EMBEDDED GAME CONTROLLER (2015)

In the journal article “Heart Rate Monitoring by a Pulse Sensor Embedded Game Controller,” authors Erika Abe, Hiroshi Chigira, Koichi Fujiwarai, Toshitaka Yamakawa, and Manabu Kano discuss measuring users’ heart rates during gameplay through a controller and using this data in interaction; they describe an experiment that showed that “correlation... between [heart rate] and the game score varied according to player condition,” which “indicates that player condition during video game could be estimated by monitoring [heart rate] and the game score simultaneously.[3]

### PLAYPULSE GAMING BIKE (2021)

PlayPulse ONE is a “gaming bike” with “handlebars with game controllers as well as heart-rate sensors combine immersive gaming with measurable exercise results.” Heart rate is then used to track a user’s progress.[4]

## **CONCEPT AND METHOD**

While precedents have incorporated heart rate into their projects, these precedents seemed rare, and I could not find any that used heart rate as a main input. To push experimentation past just mere inclusion, I decided to create a game that used heart rate as the only control.

When I was 5, I went skiing with my family. As my parents and I were getting on a ski lift, I fell off as it began to rise. The people working the ski lift put me on the chairlift behind my parents’, but they neglected to lower the safety bar. Because I was a small child, I couldn’t reach the bar on my own and had to ride unsecured. My mom tells this story often, emphasizing how she didn’t want to appear nervous (because she thought I would freak out and fall off) and how she also didn’t want to seem calm (because she thought I would fall asleep... and fall off). 

In my game, I will recreate this situation with the user playing as young me. The game will be played by wearing a heart rate monitor and headphones. As the user plays, sounds proven to have calming effects will play through the user’s headphones. Randomly, the headphones will play harsh and intentionally jarring sounds. Assuming that these sounds will be surprising, I expect the user’s heart rate to increase. If the user’s heart rate increases too much, the character will begin to freak out and eventually fall off the ski lift. If the user’s heart rate decreases too much, the character will fall asleep and also fall off the ski lift. 

The game strategy would revolve around bodily awareness and improving one’s ability to be unfazed by these disturbances. To make the game more difficult as one plays, this range the player’s heart rate must remain in will shrink over time.

To build this game, I will use a microcontroller board, a pulse sensor, and headphones. I will code the game using the Arduino programming language.

## **GOALS**

1. Test the extent to which heart rate can be used as an input in gameplay
2. Gain insight into if bodily awareness techniques could serve as a safeguard to prevent elevated anxiety in noisy environments

# ANIMATION

Because the game is tied to a personal story, I wanted the game’s visual to have a comfy feel. Pixel art feels familiar to me and is common and “retro” to the point that it evokes nostalgia for many people, so it seemed perfect for this game.

I made my pixel art assets in Illustrator. I then turned these into mini-animations of three to four frames. 

## CHARACTER DESIGN

![Screen Shot 2022-01-27 at 7.44.55 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5701d892-e608-4d0c-a599-11e6b641b07e/Screen_Shot_2022-01-27_at_7.44.55_PM.png)

![Screen Shot 2022-01-27 at 7.45.08 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c55e1764-fdbb-4995-a314-59ca59802eab/Screen_Shot_2022-01-27_at_7.45.08_PM.png)

![Screen Shot 2022-01-27 at 7.45.20 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c6aaa299-0916-4311-bd90-2e66d9262755/Screen_Shot_2022-01-27_at_7.45.20_PM.png)

![Screen Shot 2022-01-27 at 8.13.37 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f8b5f989-d2f9-4745-b06a-352638b77c6f/Screen_Shot_2022-01-27_at_8.13.37_PM.png)

## CHAIR LIFT DESIGN

![Screen Shot 2022-01-27 at 8.34.16 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9504137e-2def-40e1-a9fd-ca64bd4720a1/Screen_Shot_2022-01-27_at_8.34.16_PM.png)

![Screen Shot 2022-01-27 at 8.34.25 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c12fef03-e92e-47a9-862e-cee976db460d/Screen_Shot_2022-01-27_at_8.34.25_PM.png)

![Screen Shot 2022-01-27 at 8.34.32 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3f4ad58e-f1d5-4917-ac18-3b74eb3745e0/Screen_Shot_2022-01-27_at_8.34.32_PM.png)

![Screen Shot 2022-01-27 at 8.38.00 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7acad46b-d0aa-48a9-a541-f812ad55549f/Screen_Shot_2022-01-27_at_8.38.00_PM.png)

## ANIMATION

### PROGRESS SHOTS

freaking out

![freaking out.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f2d91d33-8488-4a18-b3f0-554d376ec97f/freaking_out.gif)

anxious

![anxious.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/77640499-f0e5-4d4b-a857-916dd8ef58f2/anxious.gif)

neutral

![FINAL SWING!.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e23a4c87-df3e-4d2e-a96f-69cfd37b6537/FINAL_SWING!.gif)

sleepy

![sleepy2.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/75467f95-b5b2-4780-9a4d-72b809355dba/sleepy2.gif)

asleep

![asleep.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/707ac0f5-10ce-490f-93dd-e54a8fdfe313/asleep.gif)

### FINALIZED FRAMES

![skigame_freakingout1.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/da4697e1-9a8c-4efe-b2b9-689c77fb5c9d/skigame_freakingout1.png)

![skigame_freakingout2.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0c42f027-1ba9-42a4-bf7b-eb1bbbdd6f81/skigame_freakingout2.png)

![skigame_freakingout3.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4bdf39ee-e6a7-49aa-9e3e-164ca20409d8/skigame_freakingout3.png)

![skigame_anxious1.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b73697e2-07f7-4e1a-b1f7-8e3acabde838/skigame_anxious1.png)

![skigame_anxious2.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4b607a80-3b08-499d-ad7e-4ed2093b7e16/skigame_anxious2.png)

![skigame_anxious3.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5cd964e8-f73f-45c3-9eb3-d4f85feae746/skigame_anxious3.png)

![skigame_anxious4.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d7243a27-103d-455e-a104-764976dffa6e/skigame_anxious4.png)

![Artboard 5_7.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e57be49d-abab-4929-8359-dea2f46a6886/Artboard_5_7.png)

![skigame_neutral2.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1f7d312e-b92b-4a23-9988-d8f787a93643/skigame_neutral2.png)

![skigame_neutral3.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a56297d7-6de4-450f-bb9f-230b069d85fc/skigame_neutral3.png)

![skigame_sleepy1.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2c7b306b-f706-466d-9501-783862bcca8a/skigame_sleepy1.png)

![skigame_sleepy2.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8cd2455f-4825-4016-828a-08a8defd258f/skigame_sleepy2.png)

![skigame_sleepy3.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d8c76336-874d-423d-9a43-ba01a50b8fe7/skigame_sleepy3.png)

![skigame_asleep1.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9ab8a35c-c686-4721-9c6d-ee2b4b6b6c11/skigame_asleep1.png)

![skigame_asleep2.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/aff4c009-86f0-4f9e-a823-3de2ff774c5b/skigame_asleep2.png)

![skigame_asleep3.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e0259bf1-ea2f-471a-bdd7-fa71709858b9/skigame_asleep3.png)

### FINALIZED ANIMATIONS

![skigameanimationsFINAL.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cd65e20d-e7f4-446b-8da3-c8819c0fbb3f/skigameanimationsFINAL.gif)

### BACKGROUND ANIMATION

![snow.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4d40418c-0487-4e5b-8886-8186d0656cf1/snow.gif)

# SOUND

## RESEARCH

### SOURCES

**THE EFFECT OF SOUNDS ON NEWBORN INFANTS UNDER STRESS (1996)**

In this journal article, authors Kiyobumi Kawakami, Kiyoko Takai-Kawakami, Hiroyuki Kurihara, Yukiko Shimizu, and Takumi Yanaihara analyzed how infant stress responses during minimally invasive procedures varied when exposed to white noise or heartbeat sounds, both presented at 85dB. The results showed that “presenting [these] sounds to newborn infants in this stressful situation had a calming effect.”[5]

![blakn.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a56fda58-f183-4ac6-bfa5-fc450fc67a01/blakn.png)

**THE INFLUENCE OF WHITE NOISE ON SLEEP IN SUBJECTS EXPOSED TO ICU NOISE (2005)**

In this study, authors Michael L. Stanchina, Muhanned Abu-Hijleh, Bilal K. Chaudhry, Carol C. Carlisle, and Richard P. Millman “hypothesized that white noise... reduce[s] arousals by reducing the magnitude of changing noise levels.” Their results supports this hypothesis.[6]

![blakn.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a56fda58-f183-4ac6-bfa5-fc450fc67a01/blakn.png)

**STRESS REDUCTION AND ANALGESIA IN PATIENTS EXPOSED TO CALMING MUSIC POSTOPERATIVELY: A RANDOMIZED CONTROLLED TRIAL (2005)**

Authors U. Nilsson , M. Unosson and N. Rawal postulate that ”listening to natural sounds[, such as] sounds of a ripple, a small stream, a soft wind or a twitter” is correlated with “reduction in BP and HR during emergence from anaesthesia” in this journal article.[7]

![blakn.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a56fda58-f183-4ac6-bfa5-fc450fc67a01/blakn.png)

**HETEROGENEITY OF DEFENSIVE RESPONSES AFTER EXPOSURE TO TRAUMA: BLUNTED AUTONOMIC REACTIVITY IN RESPONSE TO STARTLING SOUNDS (2013)**

In this study, authors Wendy D'Andrea, Nnamdi Pole, Jonathan DePierro, Steven Freed, and D. Brian Wallace used acoustic startle to analyze response times; they used the “San Diego Instruments Startle Reflex System (SR-Lab)... to administer... the acoustic stimuli [which consisted of 105 dB] blasts of white noise that lasted 40 ms each.”[8]

![blakn.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a56fda58-f183-4ac6-bfa5-fc450fc67a01/blakn.png)

**WHY DOES THE SOUND OF WATER HELP YOU SLEEP? (2016)**

In this article, Orfeu Buxton, “an associate professor of biobehavioral health at Pennsylvania State University,” discusses sounds proven to be calming or alarming. Buxton asserts that, based on analysis of a sleep disruption study’s results, nature sounds, like “the crash of ocean waves, the babbling of brooks[, and].... the wind in the trees,” are calming while “no-noise-to-peak-noise” sounds, like “alarms, ringing phones, and... human conversations,” are jarring.[9]

![blakn.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a56fda58-f183-4ac6-bfa5-fc450fc67a01/blakn.png)

**STRESSFUL CITY SOUNDS: GLUCOCORTICOID RESPONSES TO EXPERIMENTAL TRAFFIC NOISE ARE ENVIRONMENTALLY DEPENDENT (2017)**

In this study, authors Scott Davies, Nicole Haddad and Jenny Q. Ouyang “exposed adult house wrens, *Troglodytes aedon*, to either traffic noise or pink noise” and “found that urban wrens had higher initial (pre-restraint) corticosterone than rural wrens before treatment, and that traffic noise elevated initial corticosterone of rural, but not urban, wrens.”[10]

![blakn.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a56fda58-f183-4ac6-bfa5-fc450fc67a01/blakn.png)

### CONCLUSIONS

Numerous studies supported the calming effect of white noise[11][12] and nature noises.[13][14] One study suggested that heartbeat sounds have the same effect.[15] Numerous studies with cited acoustic stress protocols[16] reported that short blasts of white noise,[17] phone alarms, and human voices[18] are particularly jarring. While continuous loud background noise, such as traffic noise in urban areas, is associated with long term-stress, one study argued that shorter exposure periods did not have a notable effect on urban residents.[19]

From these conclusions, I decided to use white noise, ocean noises, and bird sounds as my calming sounds and alarms, short blasts of blaring white noise, and human voices as my alarming sounds.

## SOUND DESIGN

### SAMPLES

To find samples, I used the website Freesound, “a collaborative database of Creative Commons Licensed sounds.” [20] I chose longer samples of calming sound because they take more time to be effective. I ended up picking out the following samples:

Alarm at Airport[21]

[Airport Alarm.wav](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/58428f25-51e6-421a-b3d8-a3890845a511/Airport_Alarm.wav)

Ambience, Seaside Waves, Close, A[22]

[Waves and White Noise.wav](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/249b733d-2604-4f0d-9757-a165dd10cf20/Waves_and_White_Noise.wav)

Birds in Spring (Scotland)[23]

[Bird Noises.wav](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/608881d6-de78-4067-9fc3-3a9ba3556c4b/Bird_Noises.wav)

Comical Screams[24]

[Comical Screams.wav](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4301a742-def5-4a50-a544-0623531148ec/Comical_Screams.wav)

Few Male Hey Shout[25]

[Hey Shout.wav](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d605245a-1ff7-4021-a410-847449da8a6e/Hey_Shout.wav)

Hello[26]

[Hello.mp3](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5ea83912-39cc-4dd4-b75d-7da74170b180/Hello.mp3)

iPhone Alarm[27]

[iPhone Alarm.wav](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/28bc9c75-169c-40ab-8b4e-c4740740f570/iPhone_Alarm.wav)

Screaming2[28]

[High Pitched Scream.wav](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/daa54a0e-6041-4f65-9176-73c13ff71257/High_Pitched_Scream.wav)

White Noise Looped[29]

[Loud White Noise.mp3](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/45f4ffcb-66c9-4ded-993e-c7dbba8c9b8d/Loud_White_Noise.mp3)

### AUDIO FORMAT

I initially planned to make my code randomly play different samples, but upon further thinking, I realized that there was a high likelihood that users would get too many shocking sounds in a row. Instead, I used Ableton to combine the samples together so that the calmer sounds play for longer durations and are occasionally interrupted. 

[skigameaudio.mp3](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5eb094cc-dbd8-4e7b-a7cb-de7961e03afb/skigameaudio.mp3)

### INTRO MUSIC

When testing the game, it felt empty with no sound playing throughout the instructions and winning screen. I decided to make some simple intro music using Ableton Live to make the game a bit more polished.

[introaudio.mp3](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5929369f-3ce4-4c8b-88a3-2e8f9c2b2fd3/introaudio.mp3)

# ARDUINO WORK

## PHYSICAL WORK

### ASSEMBLY

I chose to use World Famous Electronics’ Pulse Sensor as its a cheap option and easy to code using Arduino’s programming language. Instead of an Arduino, I used an ELEGOO UNO R3 Controller Board since I already had one on hand. I also chose to add a button that users would use to start and end the game.

### LAYOUT AND SCHEMATIC

![Board images from ELEGOO[30]
Pulse Sensor image from World Famous Electronics[31]](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1238be89-95c3-4aa7-8828-6b78dea20148/elegooooo.png)

Board images from ELEGOO[30]
Pulse Sensor image from World Famous Electronics[31]

### PHYSICAL BUILD

![Screen Shot 2022-01-31 at 6.47.42 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/86410dd3-02bd-434d-b139-046b1f4a0121/Screen_Shot_2022-01-31_at_6.47.42_PM.png)

![Screen Shot 2022-01-31 at 6.47.35 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ed7a691d-8483-4bfb-b127-f95002a86c18/Screen_Shot_2022-01-31_at_6.47.35_PM.png)

## CODING

### REFERENCE

To use the Pulse Sensor, I downloaded the PulseSensor Playground library.[32] To connect the UNO and the p5.js editor, I followed the instructions on the READEME.md file in the p5.serialport Github repository.[33]

### PLANNING ARDUINO CODE

1. Write button state
    1. Pressed = 1
    2. Not pressed = 0
2. If pulse sensor picks up heart rate
    1. Write heart rate

### PLANNING P5.JS CODE

- Use **switch** and **cases** with **counter** to control game
- Use **buttonpressbool** to increase counter
1. Sort incoming data: **sortarduinodata()**
    1. If read data is equal to 1
        1. Set **buttonpressbool** equal to **true**
    2. If read data is over 1
        1. Add to the front of array **heartrates**
2. Button function: **mybutton()**
    1. If **buttonpressbool** is equal to true
        1. If on **calibratethreshold()**
            - Set **hrthreshold** equal to **averagehr**
        - If on **instructions()**
            - Set **gametimer** equal to current milliseconds
        1. Increase **counter** by 1
        2. Set **buttonpressbool** equal to false
3. Start screen: **startscreen()**
    1. “[TITLE]”
    2. “PRESS AND HOLD BUTTON TO START”
    3. **mybutton()**
4. Calibrating: **calibratethreshold()**
    1. “PLEASE WAIT WHILE THE SENSOR CALIBRATES...”
    2. Set **hrstoanalyze** equal to a subset of the first 10 items in **heartrates**
    3. If range of **hrstocalibrate** is less than 10
        1. Set **averagehr** equal to the average of **hrstocalibrate**
        2. “THE SENSOR READS YOUR HEART RATE AS ABOUT **averagehr**”
        3. “IF THIS SEEMS CORRECT, PRESS AND HOLD BUTTON TO PROCEED”
        4. **mybutton()**
5. Instructions: **instructions()**
    1. [INSTRUCTIONS]
    2. PRESS AND HOLD BUTTON TO START
    3. **mybutton()**
6. Animations: **runanimations()**
    1. Set **hrstoanalyze** equal to a subset of the first 20 items in **heartrates**
        1. Set **averagehr** equal to the average of **hrstocalibrate**
    2. If **averagehr** is over 10 more than **hrthreshold**
        1. Set **animationindex** equal to 4
        2. If **stateindex** is not equal to **animationindex**
            - Set **newstatebool** equal to true
    3. If **averagehr** is over 10 less than **hrthreshold**
        1. Set **animationindex** equal to 2
        2. If **stateindex** is not equal to **animationindex**
            - Set **newstatebool** equal to true
    4. Else
        1. Set **animationindex** equal to 3
    5. Show item in **myanimations** with index of **animationindex**
7. Sounds: **runsounds()**
    1. If no sound is playing
        1. Set **randsoundindex** equal to a random integer between 0 and 1 less than the length of **mysounds**
        2. Play item in **mysounds** with index of **randsoundindex** once
8. Game timer: **gametime()**
    1. If **gametimer** is over 60000ms (1 minute) more than current milliseconds
        1. Set **counter** equal to value for **gameend()**
9. State timer: **statetime()**
    1. If **statetimer** is over 5000ms (5 seconds) more than current milliseconds and **animationindex** does not equal 3
        1. Set **gametimer** equal to current milliseconds
        2. If **animationindex** is equal to 4
            - Set **counter** equal to value for **freakingout()**
        3. If **animationindex** is equal to 2
            - Set **counter** equal to value for **asleep()**
10. Reset state timer: **resetstatetime()**
    1. If **newstatebool** is equal to true
        1. Set **statetimer** equal to current milliseconds
        2. Set **stateindex** equal to **animationindex**
        3. Set **newstatebool** equal to false
11. HR too high: **freakingout()**
    1. Set **animationindex** equal to 5
    2. If **gametimer** is over 5000ms (5 seconds) more than current milliseconds
        1. Set **counter** equal to value for **gameend()**
12. HR too low: **asleep()**
    1. Set **animationindex** equal to 1
    2. If **gametimer** is over 5000ms (5 seconds) more than current milliseconds
        1. Set **counter** equal to value for **gameend()**
13. Play game: **runskigame()**
    1. **runanimations()**
    2. **runsounds()**
    3. **gametime()**
    4. **statetime()**
14. Game over: **gameend()**
    1. If **animationindex** is equal to 5
        1. “YOU FREAKED OUT AND FELL”
    2. If **animationindex** is equal to 1
        1. “YOU FELL ASLEEP AND FELL”
    3. Else
        1. “YOU MADE IT TO THE TOP!”
    4. “PRESS AND HOLD BUTTON TO PLAY AGAIN”
    5. **mybutton()**

# DEBRIEF

## TAKEAWAYS

### LESSONS LEARNED

Setting up serial communication with an Arduino is much easier than I anticipated! In the future as I work further with Arduinos or Raspberry Pis, I will be less intimidated by setting up my workspace and editors.

### WHAT I’D DO DIFFERENT

While I liked using the Arduino, I found that the pulse sensor was a bit buggy. If I could go back, I would look into different kinds of pulse sensors and debate making my own, which seems easier than I initially thought it would be.

## REFLECTION

### WHAT I LIKED

I really liked how my game turned out overall! I think the animations are cute, and the contrast between the intro music and the game music is amusing to me. Additionally, I like the contrast between the comfy visuals and the strange and at times unsettling game audio.

### WHAT I DISLIKED

As noted earlier, the pulse sensor didn’t work very well, and it made the debugging process really difficult and frustrating.

# FOOTNOTES

[1] Watts.
[2] Johnson.
[3] Abe.
[4] “PlayPulse.”
[5] Kawakami.
[6] Stanchina.
[7] Nilsson.
[8] d'Andrea.
[9] Hadhazy.
[10] Davies.
[11] Kawakami.
[12] Stanchina.
[13] Nilsson.
[14] Hadhazy.
[15] Kawakami.
[16] d'Andrea.
[17] Ibid.
[18] Hadhazy.
[19] Davies.
[20] “Freesound.”
[21] Raygunvirus.
[22] InspectorJ.
[23] BurghRecords.
[24] Mafon2.
[25] Robinhood76.
[26] 1489232.
[27] Bayaba22c.
[28] Owly-bee.
[29] Cdrk.
[30] “ELEGOO UNO R3 Controller Board.”
[31] Gitman.
[32] “PulseSensor Playground.”
[33] Van Every.

# Sources

1489232. “hello.”  *Freesound, Freesound,* https://freesound.org/people/1489232/sounds/449500/.

Abe, Erika, et al. "Heart rate monitoring by a pulse sensor embedded game controller." *2015 Asia-Pacific Signal and Information Processing Association Annual Summit and Conference (APSIPA)*. IEEE, 2015.

BurghRecords. “Birds In Spring (Scotland).”  *Freesound, Freesound,* https://freesound.org/people/BurghRecords/sounds/463903/.

Bayaba22c. “iphone_alarm.wav.”  *Freesound, Freesound,* https://freesound.org/people/bayaba22c/sounds/575814/.”

Cdrk. “wn_looped.flac.”   *Freesound, Freesound,* https://freesound.org/people/cdrk/sounds/20009/.

Codeman38. “Press Start 2P.” *Google Fonts*, Google, https://fonts.google.com/specimen/Press+Start+2P.

d'Andrea, Wendy, et al. "Heterogeneity of defensive responses after exposure to trauma: Blunted autonomic reactivity in response to startling sounds." *International journal of psychophysiology* 90.1 (2013): 80-89.

Davies, Scott, Nicole Haddad, and Jenny Q. Ouyang. "Stressful city sounds: glucocorticoid responses to experimental traffic noise are environmentally dependent." *Biology letters* 13.10 (2017): 20170276.

“ELEGOO UNO R3 Controller Board.” *ELEGOO*. https://www.elegoo.com/products/elegoo-uno-project-super-starter-kit. 

“Freesound.” *Freesound*. freesound.org.

Gitman, Yury and Joel Murphy. “PulseSensor.” *World Famous Electronics llc*. September 2011. pulsesensor.com. 

Hadhazy, Adam. “Why Does the Sound of Water Help You Sleep?” *LiveScience*, Purch, 18 Jan. 2016, https://www.livescience.com/53403-why-sound-of-water-helps-you-sleep.html.

InspectorJ. “Ambience, Seaside Waves, Close, A.wav.”  *Freesound, Freesound,* https://freesound.org/people/InspectorJ/sounds/400632/.

Johnson, Eric. “Stanford Has a Videogame Controller That Knows If You're Bored.” *Vox*, Vox Media, 28 Apr. 2014, https://www.vox.com/2014/4/28/11626130/stanford-has-a-videogame-controller-that-knows-if-youre-bored.

Kawakami, Kiyobumi, et al. "The effect of sounds on newborn infants under stress." *Infant Behavior and Development* 19.3 (1996): 375-379.

Mafon2. “Comical Screams." *Freesound, Freesound,* https://freesound.org/people/Mafon2/sounds/343490/.

Nilsson, Ulrica, Mitra Unosson, and Narinder Rawal. "Stress reduction and analgesia in patients exposed to calming music postoperatively: a randomized controlled trial." *European journal of anaesthesiology* 22.2 (2005): 96-102.

Owly-bee. “Screaming2.wav.” *Freesound, Freesound,* https://freesound.org/people/owly-bee/sounds/415353/.

“PlayPulse.” *Playpulse*, Playpulse AS, https://playpulse.com/.

“PulseSensor Playground.” *Arduino Reference*, Arduino, https://www.arduino.cc/reference/en/libraries/pulsesensor-playground/.

Raygunvirus, “alarm at airport.wav." *Freesound, Freesound,* https://freesound.org/people/raygunvirus/sounds/218795/.

Robinhood76. “07706 few male hey shout.wav.” *Freesound, Freesound,* https://freesound.org/people/Robinhood76/sounds/467869/.

Stanchina, Michael L., et al. "The influence of white noise on sleep in subjects exposed to ICU noise." *Sleep medicine* 6.5 (2005): 423-428.

Van Every, Shawn, et al. “README.md.” *p5.Serialport*, GitHub, 10 Oct. 2019, https://github.com/p5-serial/p5.serialport.

Watts, Martin. “N64 Tetris Games.” *N64 Today*, 14 Sept. 2019, https://n64today.com/2019/09/14/n64-tetris-games/.
