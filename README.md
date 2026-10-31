# Lesson Ladder

CAPS-aligned learning for Grade 7 to 9. Every topic has four steps: **Learn** (notes), **Practise** (5 questions with hints, not marked), **Test** (10 marked questions) and a **Chapter test** (20 exam-style questions). Wrong answers become weak spots to fix, and parents get a progress report. It installs like an app on PCs and phones and syncs progress through a free Firebase database.

**Subjects:** Grade 7: Mathematics, History and Geography. Grades 8 and 9: Mathematics, Natural Sciences, English HL, Afrikaans FAL, Social Sciences (History and Geography), Life Orientation.

---

## One-time setup (about 20 minutes)

### Part A: Create the free Firebase database

1. Go to **console.firebase.google.com** and sign in with a Google account.
2. Click **Create a project**. Name it `lesson-ladder`. You can turn Google Analytics off. Click **Create project**.
3. **Turn on device sign-in:** in the left menu open **Authentication → Get started**. On the **Sign-in method** tab, click **Anonymous**, switch it on, and click **Save**. This lets each device connect without anyone typing an email or password. Your own email is only used to manage the Firebase console.
4. **Allow your website:** you'll do this after Part B, once you know the site address.
5. **Create the database:** left menu **Build → Firestore Database → Create database**.
   - Location: choose **africa-south1 (Johannesburg)**. This can't be changed later.
   - Choose **Start in production mode** and click **Create**.
6. **Add the security rules:** in Firestore, open the **Rules** tab. Delete everything there, paste the contents of `firestore.rules` from this folder, and click **Publish**. These rules make sure each family can only see its own children's results.
7. **Get your settings:** click the gear icon next to *Project Overview* → **Project settings**. Under **Your apps**, click the **`</>`** (web) icon. Name it `Lesson Ladder` (leave Firebase Hosting unticked) and click **Register app**. You'll see a block of code containing `apiKey`, `authDomain`, `projectId` and so on.
8. Open `config.js` in this folder and replace each `PASTE_...` value with the matching value from that block. Keep the quotes.

The values in `config.js` are meant to be public. Your data is protected by the rules from step 6, not by hiding these values.

### Part B: Put the app online (no personal name in the address)

The app is hosted on Netlify's free plan. The address is a site name you choose, like `lessonladder-sa.netlify.app`, so your name doesn't appear anywhere.

1. Unzip the download so you have a folder called **lesson-ladder** that contains `index.html` and your edited `config.js`.
2. Go to **app.netlify.com/drop** and create a free account. Signing up with email is fine; your account name is never shown on the site.
3. Drag the **lesson-ladder** folder onto the page. After a few seconds you'll get a random address, such as `sparkly-otter-12ab.netlify.app`.
4. Open that site's settings and choose **Change site name**. Pick a neutral name, for example `lessonladder-sa`. Your app is now at **https://lessonladder-sa.netlify.app**
5. **Finish Part A, step 4:** in Firebase, go to **Authentication → Settings → Authorized domains → Add domain** and enter your site address without `https://` (e.g. `lessonladder-sa.netlify.app`).

To update the app later, open the site in Netlify, go to **Deploys**, and drag the updated folder onto the page.

### Part C: Create your family

1. Open the link on your phone and tap **New family**.
2. Choose a 4-digit **parent PIN**. It keeps the report and settings away from the kids.
3. The app shows your **family code**, for example `K7PM-29QX-HT4R`. Write it down and keep it private: it is the key to your family's data.
4. In the **Parent** area, add each child with their grade.

---

## Install on each device

On each new device, open the link, choose **Join with family code**, and type your family code. You only do this once per device. The code is also shown in the parent area if you need it again.

| Device | How to install |
|---|---|
| Windows PC (Chrome or Edge) | Open the link. Click **Install app** in the green bar, or the install icon at the right of the address bar. It gets a Start menu and desktop icon. |
| Android phone (Chrome) | Open the link, tap **Install app** in the green bar, or **⋮ → Add to Home screen**. |
| iPhone (Safari) | Open the link in Safari, tap **Share → Add to Home Screen**. |

On your phone, open **Parent**, enter the PIN and tick **Remember this phone as a parent device**. On the kids' PCs, don't tick it.

---

## How weak spots work

- Every question a child gets wrong becomes a **weak spot**.
- Their home screen lists weak spots by topic, with buttons to **re-read the notes** or **practise** just those questions.
- **Fix my weak spots** builds a practice round of up to 10 missed questions, starting with the topics that have the most mistakes.
- A weak spot is cleared the moment the child answers that question correctly. If they get it wrong again, it stays.
- The parent report shows each child's weak areas with the exact questions and answers, and how many they've fixed.

## Offline use

Once installed and opened online at least once, the notes and quizzes work without internet. Results are kept on the device and sync automatically when it reconnects.

## Updating the app

- Notes and test questions are in `content.js`; practice questions (with hints) and chapter-test questions are in `content-extra.js`. Grade 7 topics are in the `content-grade7…` files. Copy an existing block and change it.
- After any change, open `sw.js` and raise the version number in `lesson-ladder-v4` (to v3, then v4, and so on). This tells installed copies to download the new version.

## Costs

Firebase's free Spark plan covers a family easily: 50,000 reads and 20,000 writes per day, and 1 GB of storage. No credit card is needed.

## Another family using the app

Each family is completely separate, with its own family code and parent PIN. One family can never see another family's children.

To add a second family (for example, a child who lives with their father):
1. Send the father the app link.
2. On **his phone**, he opens the link, taps **New family**, chooses his own parent PIN, and writes down the new family code it shows.
3. In his **Parent** area, he adds his child and their grade.
4. On the **child's device**, open the link, tap **Join with family code**, and type the father's code.
5. He opens **Parent** on his phone to check progress, and ticks **Remember this phone as a parent device**.
