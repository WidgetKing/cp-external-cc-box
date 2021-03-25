# cp-external-cc
## Install Instructions
First of all, download the cc_edit.js file listed above. I probably also sent you this code in an e-mail.
Next we need to ensure this code will be included in Captivate. We can do this by loading this code 'headlessly'. We use a similiar process to load the CpExtra library into Captivate. So follow the process explained in the video below. Just swap out the **Infosemantics_CpExtra.js** for **cc_edit.js**.

[![](http://img.youtube.com/vi/i-px1CkiDHM/0.jpg)](http://www.youtube.com/watch?v=i-px1CkiDHM "Headless Loading")

Your code should now be installed! Remember, you'll need to do this for **each** of your Captivate developers. 

## Edit Captivate's CC Settings to move the CC box to the right.
The code will not automatically make the CC box appear on the right side of the screen. We need to make that change from within Captivate.
1. Go to Project > Skin Editor.

![Project > Skin Editor inside Captivate](https://github.com/WidgetKing/cp-external-cc-box/blob/main/images/project-skin-editor.png?raw=true)

2. Enabled Closed Captioning and click the **Settings...** button.

![Skin Editor Dialogue with Closed Captioning settings button](https://github.com/WidgetKing/cp-external-cc-box/blob/main/images/cc-settings.jpg?raw=true)

3. **VERY IMPORTANT** From the dropdown menu pick **Project**. Otherwise you will be only editing how the CC box appears on a single slide.

![Selecting Project from the dropdown menu](https://github.com/WidgetKing/cp-external-cc-box/blob/main/images/cc-whole-project.png?raw=true)

4. Change the CC settings to the following:
    - Align: Middle Right
    - H: 100%
    - W: 30%

![CC settings for putting the box on the right of the screen](https://github.com/WidgetKing/cp-external-cc-box/blob/main/images/cc-whole-project.png?raw=true)

5. Double check that you have selected **Project** from the dropdown. Then click the **apply** button.

![Clicking the apply button](https://github.com/WidgetKing/cp-external-cc-box/blob/main/images/cc-apply.png?raw=true)

6. Remember, for each slide that you want the CC to appear, you will need to include an audio clip, even if it's just silence for the duration of the slide. You then input your text into the Slide Notes pane and enable them for closed captioning. If you have not selected any text to appear in the closed captioning, then Captivate will automatically close down the Closed Captioning pane, as it believes there is nothing to show.

And that should be everything! If you encounter any issues, you can send me an e-mail or flag them in the issues section of this Github repository.