# Deployment Guide: Resend Email Integration

This guide walks you through completing the remaining tasks to make your contact form send real emails.

---

## 📋 Remaining Tasks

| Task | Status | Action Required |
|-------|----------|-----------------|
| Create Resend account and obtain API key | ⏸ Blocked | Manual signup required |
| Deploy to Vercel and add environment variables | ⏸ Blocked | Manual deployment required |
| Test production deployment | ⏸ Blocked | Requires deployment completion |

---

## 🔐 Task 1: Create Resend Account & API Key

### Step 1: Sign Up
1. Go to https://resend.com/signup
2. Sign up (free account, no credit card required)
3. Check your email for verification link

### Step 2: Create API Key
1. Log in to Resend dashboard
2. Navigate to: https://resend.com/api-keys
3. Click "Create API Key"
4. Give it a name (e.g., "Portfolio Contact Form")
5. Click "Create"
6. **Copy the API key** (starts with `re_`)

### Step 3: Add to Local Environment
**Already done!** Your `.env` file already contains the API key.

✅ .env file is in .gitignore (safe to use locally)
✅ API key will not be committed to git

---

## 🚀 Task 2: Deploy to Vercel

### Option A: Deploy via GitHub (Recommended)

#### Step 1: Push to GitHub
```bash
# Check git status
git status

# Add all changes
git add .

# Commit with message
git commit -m "Add Resend email integration with serverless function"

# Push to GitHub
git push
```

#### Step 2: Deploy to Vercel
1. Go to https://vercel.com/new
2. Click "Import an Existing Project"
3. Select your GitHub repository
4. Click "Deploy"
5. Wait for deployment to complete (~1-2 minutes)

#### Step 3: Add Environment Variable
1. After deployment, go to your Vercel project
2. Click **Settings** → **Environment Variables**
3. Click **Add New**
4. Fill in:
   - **Name:** `RESEND_API_KEY`
   - **Value:** Paste your Resend API key
   - **Environment:** Select all (Production, Preview, Development)
5. Click **Save**
6. Click **Redeploy** button to apply the environment variable

---

### Option B: Deploy via Vercel CLI

#### Step 1: Install Vercel CLI
```bash
npm i -g vercel
```

#### Step 2: Login
```bash
vercel login
```
Follow the prompts to log in to your Vercel account.

#### Step 3: Deploy
```bash
vercel
```
Follow the prompts:
- Set up and deploy project? `Y`
- Which scope do you want to deploy to? (Select your account/team)
- Link to existing project? `N`
- What's your project's name? (Press Enter for default `my-project`)
- In which directory is your code located? (Press Enter for current directory)
- Want to override settings? (Press Enter for `N`)

#### Step 4: Add Environment Variable via CLI
```bash
vercel env add RESEND_API_KEY
```
Paste your Resend API key when prompted.

---

## ✅ Task 3: Test Production Deployment

### Testing Checklist

After deployment is complete:

#### 1. Access Your Site
- Visit your deployed Vercel URL
- Example: `https://your-project.vercel.app`

#### 2. Navigate to Contact Form
- Scroll to bottom of page or click "Contact" in navbar
- Click on "Contact" section

#### 3. Submit Test Email
Fill out the form:
- **Name:** Test User
- **Email:** `test@example.com` (or your test email)
- **Message:** `This is a test message from the production deployment.`

Click **Submit**

#### 4. Verify Email Received
1. Check `raghavvvgaba@gmail.com` inbox
2. Look for email with subject: "New Contact Form Message from Test User"
3. Verify email contains:
   - ✅ Cyberpunk-themed header with "New Message"
   - ✅ "From: Test User"
   - ✅ "Email: test@example.com"
   - ✅ Your test message content
   - ✅ Footer with "You can reply directly to: test@example.com"

#### 5. Test Error Cases
Test validation errors:

**Empty Fields:**
- Leave all fields empty and click Submit
- ✅ Should show: "Please fill in all fields"

**Invalid Email:**
- Name: "Test"
- Email: "invalid-email"
- Message: "Test message"
- ✅ Should show: "Invalid email format"

**Too Short Message:**
- Name: "Test"
- Email: "test@example.com"
- Message: "Hi" (less than 10 characters)
- ✅ Should show: "Message must be 10-5000 characters"

#### 6. Test Reply-To Feature
1. When you receive the test email
2. Click "Reply" in your email client
3. ✅ Reply should go to test@example.com (the sender's email)

---

## 🔧 Troubleshooting

### Email Not Received?

1. **Check Vercel Environment Variables**
   - Go to Vercel dashboard → Settings → Environment Variables
   - Verify `RESEND_API_KEY` is set
   - Try redeploying

2. **Check Resend Dashboard**
   - Go to https://resend.com/logs
   - Look for failed attempts
   - Check for API errors or validation failures

3. **Check Browser Console**
   - Open developer tools (F12)
   - Look for network errors when submitting form
   - Check for 500 errors from `/api/contact`

4. **Verify API Key Format**
   - Should start with `re_`
   - Should not have extra spaces or characters
   - Try regenerating the key if needed

### CORS Error?

If you see CORS errors in browser console:

```bash
Access to XMLHttpRequest at 'https://api.resend.com/emails'
from origin 'https://your-project.vercel.app' has been blocked by CORS policy
```

**Solution:** This should not happen with our implementation since we use Vercel serverless functions. If it occurs:
1. Verify `vercel.json` exists in project root
2. Check that `/api/contact` is being called from React component
3. Redeploy to Vercel

### 404 Error on `/api/contact`?

If form submission fails with 404:

1. Check Vercel deployment logs
2. Verify `vercel.json` is in the root directory
3. Confirm `api/` folder was pushed to GitHub
4. Redeploy from Vercel dashboard

### 500 Error on Submit?

If form submission shows generic error:

1. Check Vercel function logs:
   - Go to Vercel project → Functions → `api/contact`
   - Look for error messages
2. Common causes:
   - Missing `RESEND_API_KEY` environment variable
   - Invalid API key
   - Resend API service down (check https://status.resend.com)
3. Try again after fixing the issue

---

## 📊 Deployment Verification

### Verify Files Deployed

Check that these files exist in your Vercel deployment:

1. **Root directory:**
   - ✅ `vercel.json`
   - ✅ `package.json`

2. **API directory:**
   - ✅ `api/contact.js`

3. **Source directory:**
   - ✅ `src/components/Contact.jsx` (with updated handleSubmit)

### Verify Configuration

1. **Vercel Environment Variables:**
   - ✅ `RESEND_API_KEY` set

2. **Vercel Build Logs:**
   - ✅ No errors during build
   - ✅ All files successfully uploaded

---

## 🎉 Success Criteria

Your implementation is successful when:

- [ ] Resend account created with valid API key
- [ ] API key added to Vercel environment variables
- [ ] Vercel deployment complete with no errors
- [ ] Test email received at raghavvvgaba@gmail.com
- [ ] Email template displays correctly with cyberpunk styling
- [ ] Validation errors work for all test cases
- [ ] Reply-to functionality works (you can reply to sender)
- [ ] No CORS errors in browser console
- [ ] No 404 or 500 errors in Vercel logs

---

## 📝 Next Steps After Success

Once your contact form is working in production:

### Optional Enhancements:
- **Add rate limiting** to prevent spam abuse
- **Integrate reCAPTCHA** for bot protection
- **Customize email domain** when you get a custom domain
- **Add email templates** for different message types
- **Set up email notifications** for form submissions

### Monitoring:
- Check Resend dashboard regularly: https://resend.com/logs
- Monitor email deliverability rates
- Track spam complaints and bounces
- Set up alerts for unusual activity

---

## 📞 Need Help?

If you encounter issues:

1. **Check Vercel logs:**
   - Vercel dashboard → Project → Functions

2. **Check Resend logs:**
   - https://resend.com/logs

3. **Common issues:**
   - Missing environment variables
   - Incorrect API key
   - Network connectivity issues
   - Resend service outages

---

## ✅ Completion Checklist

- [ ] Created Resend account
- [ ] Generated API key
- [ ] Added API key to `.env.local` (for local testing)
- [ ] Pushed code to GitHub
- [ ] Deployed to Vercel
- [ ] Added `RESEND_API_KEY` to Vercel environment variables
- [ ] Redeployed Vercel with environment variable
- [ ] Tested form submission in production
- [ ] Verified email received at raghavvvgaba@gmail.com
- [ ] Verified email styling matches cyberpunk theme
- [ ] Tested validation errors (empty, invalid email, short message)
- [ ] Tested reply-to functionality

---

**Good luck with your deployment! 🚀**
