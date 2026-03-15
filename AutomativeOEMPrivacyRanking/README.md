Automotive OEM Privacy Ranking Browser Extension
Overview
The Automotive OEM Privacy Ranking extension is a Microsoft Edge browser tool that provides comprehensive privacy statement rankings for 30 major automotive Original Equipment Manufacturers (OEMs). This tool helps consumers and researchers understand and compare the privacy protection standards across global automotive manufacturers.

The extension displays detailed rankings, privacy statement links, assessment rationales, and maintains historical tracking of ranking changes over time.

Features
📊 Current Rankings View
30 Automotive OEMs ranked from best to worst based on privacy protection
Privacy ratings displayed with star system (⭐ to ⭐⭐⭐⭐⭐)
Headquarters location for each OEM with country emoji flags
Direct links to official privacy statements (open in new tabs)
Detailed rationale explaining each ranking assessment
🔍 Search & Filter
Search by OEM name or company brand
Filter by country to view OEMs by headquarters location
Filter by privacy rating to find companies with specific rating levels
Real-time filtering with instant results
📜 Historical Tracking
Last 5 ranking versions stored locally
Timestamp data showing when each ranking was assessed
Diff highlighting showing which OEMs improved or declined in ratings
Version tracking to monitor ranking evolution over time
💾 Data Export
CSV export functionality to download ranking data
Formatted spreadsheet compatible with Excel and Google Sheets
Assessment metadata included (date, ratings, rationale)
🎨 Modern User Interface
Dark theme optimized for easy viewing
Collapsible cards for each OEM with expandable details
Responsive design adapting to different window sizes
Smooth animations and transitions
Toast notifications for user feedback
Installation
Prerequisites
Microsoft Edge browser (Version 90+)
No additional software or dependencies required
Step-by-Step Installation
Download or clone the extension files into a folder named AutomativeOEMPrivacyRanking

Folder structure should be:

text

AutomativeOEMPrivacyRanking/
├── manifest.json
├── popup.html
├── styles.css
├── data.js
├── storage.js
├── popup.js
└── images/
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
Create icon files (or use placeholder PNG files):

icon16.png - 16x16 pixels
icon48.png - 48x48 pixels
icon128.png - 128x128 pixels
You can create simple blue or shield icons using any image editor.

Open Microsoft Edge and navigate to edge://extensions/

Enable "Developer mode" using the toggle in the top-right corner

Click "Load unpacked" button

Select the AutomativeOEMPrivacyRanking folder and confirm

Extension will appear in your toolbar - Click the icon to open!

Usage Guide
Viewing Current Rankings
Click the extension icon in your Edge toolbar
The popup opens showing all 30 OEMs ranked by privacy protection
Scroll through rankings or use filters to narrow results
Click any ranking card to expand and view full details including:
Privacy rating (1-5 stars)
Headquarters location
Links to official privacy statements
Assessment rationale
Searching & Filtering
Search box: Type OEM name, brand, or country to search
Country dropdown: Select specific country to filter OEMs by headquarters
Rating dropdown: Select rating level (⭐ through ⭐⭐⭐⭐⭐) to filter by privacy score
Combine filters for more specific results
Accessing Privacy Statements
Expand any OEM card by clicking on it
Under "Privacy Statements" section, click the 🔗 link
Privacy statement opens in a new browser tab
Review statement to understand the company's data practices
Viewing History
Click the "📜 History" button in the header
View the last 5 ranking assessments with dates and version numbers
See changes highlighted showing which OEMs improved (⬆️) or declined (⬇️) in ratings between versions
Compare privacy trends across different assessment periods
Exporting Data
Click the "💾 Export" button in the header
CSV file downloads automatically with filename OEM-Privacy-Rankings-[DATE].csv
Open in Excel or Google Sheets for further analysis
Data includes: Rank, OEM name, brand, country, rating, privacy statements, and rationale
Ranked OEMs
Tier 1: Premium Privacy Protection (⭐⭐⭐⭐⭐)
General Motors (OnStar) - 🇺🇸 United States
BMW ConnectedDrive - 🇩🇪 Germany
Mercedes-Benz (Mercedes me connect) - 🇩🇪 Germany
Tier 2: Strong Privacy (⭐⭐⭐⭐)
Volkswagen (We Connect) - 🇩🇪 Germany
Lexus Connected Services - 🇯🇵 Japan
Toyota Connected Services - 🇯🇵 Japan
Nissan/Infiniti (NissanConnect) - 🇯🇵 Japan
Ford Connected Vehicle - 🇺🇸 United States
Tier 3: Adequate Privacy (⭐⭐⭐)
Honda (HondaLink) - 🇯🇵 Japan
Hyundai Bluelink - 🇰🇷 South Korea
Kia Connect - 🇰🇷 South Korea
Acura (AcuraLink) - 🇯🇵 Japan
Chevrolet/GMC/Cadillac/Buick (OnStar) - 🇺🇸 United States
Mazda Connected Services - 🇯🇵 Japan
Subaru STARLINK - 🇯🇵 Japan
Mitsubishi Connect - 🇯🇵 Japan
Lincoln Connected Vehicle - 🇺🇸 United States
Tier 4: Weak Privacy (⭐⭐)
Chrysler/Dodge/Jeep/Ram (FCA UConnect) - 🇮🇹 Italy
Alfa Romeo - 🇮🇹 Italy
Genesis Connected Services - 🇰🇷 South Korea
Maserati - 🇮🇹 Italy
Peugeot/Citroën/Opel/Vauxhall (Stellantis) - 🇮🇹 Italy
Rivian - 🇺🇸 United States
Tier 5: Minimal Privacy Protection (⭐)
Tesla - 🇺🇸 United States
Lucid Motors - 🇺🇸 United States
VinFast - 🇻🇳 Vietnam
NIO - 🇨🇳 China
BYD - 🇨🇳 China
PACCAR (Kenworth, Peterbilt, DAF) - 🇺🇸 United States
Daimler Truck - 🇩🇪 Germany
Ranking Methodology
Evaluation Criteria
Rankings are assessed based on the following factors:

Transparency & Clarity - How clearly privacy policies explain data collection and usage
Consent Mechanisms - Presence of explicit, granular opt-in/opt-out options
Data Minimization - Commitment to collecting only necessary data
Third-Party Sharing Restrictions - Clarity on data access and sharing limitations
Data Retention & Deletion - Clear policies on data retention periods and deletion rights
Regulatory Compliance - Alignment with GDPR, CCPA, and other privacy frameworks
Consumer Rights - Mechanisms for data access, correction, and portability
Corporate Track Record - History of data breaches, litigation, and regulatory penalties
Data Governance - Explicit restrictions on secondary uses of data
Privacy by Design - Evidence of privacy engineering principles in policy
Assessment Date
Current Assessment Date: March 15, 2026

Geographic Insights
German OEMs (BMW, Mercedes-Benz, Volkswagen) score highest due to GDPR compliance
Japanese OEMs (Toyota, Honda, Nissan) provide adequate protections with room for improvement
South Korean OEMs (Hyundai, Kia, Genesis) face credibility issues from documented breaches
US OEMs show variable performance, with tech-focused companies scoring lower
Chinese & Vietnamese OEMs provide minimal transparency
Data Storage
Local Storage
All ranking data is stored locally in your browser
No data is sent to external servers or third parties
Data persists across browser sessions
Historical data (last 5 versions) is maintained automatically
Privacy
Extension does not collect any personal information
No tracking or analytics
No cookies placed on websites
Extension operates entirely offline
Keyboard Shortcuts
Shortcut
Action
Click Card

Expand/collapse OEM details

Ctrl+F

Focus search box (browser default)

Enter

Apply search/filter

File Structure
text

AutomativeOEMPrivacyRanking/
│
├── manifest.json           # Extension configuration
├── popup.html              # Main UI structure
├── styles.css              # Dark theme styling
├── data.js                 # OEM ranking data (30 companies)
├── storage.js              # Local storage management
├── popup.js                # UI logic and interactions
│
├── images/
│   ├── icon16.png          # Toolbar icon (16x16)
│   ├── icon48.png          # Extension menu icon (48x48)
│   └── icon128.png         # Store listing icon (128x128)
│
└── README.md               # This file
File Descriptions
manifest.json

Declares extension permissions, metadata, and UI properties
Specifies popup window dimensions and default behavior
popup.html

HTML structure for the popup interface
Defines views (current rankings, history), filters, and controls
styles.css

Dark theme styling with GitHub-inspired color palette
Responsive design rules and animations
Custom scrollbar styling
data.js

Contains ranking data for all 30 OEMs
Includes: rank, OEM name, country, rating, privacy statements, and rationale
Assessment date metadata
storage.js

Manages browser local storage operations
Handles ranking save/load, history tracking, and CSV export
Compares rankings to detect changes
popup.js

Handles all user interactions and UI logic
Manages view switching, filtering, and data display
Coordinates storage operations and event listeners
Troubleshooting
Extension doesn't appear in toolbar
Ensure Developer mode is enabled in edge://extensions/
Verify all files are in the correct folder
Refresh the extension using the reload icon
Popup shows blank or black screen
Try reloading the extension
Clear Edge cache and restart browser
Verify styles.css is in the extension folder
Filters not working
Ensure JavaScript is enabled in Edge
Try closing and reopening the popup
Check browser console (F12) for error messages
Privacy statement links don't open
Ensure tabs permission is not blocked
Verify URL is valid (not marked as #)
Try opening link manually from privacy statement
Export file is empty
Ensure at least one ranking is loaded
Check browser download folder permissions
Try exporting to different location
Historical data not showing
Extension needs to be used multiple times to generate history
Refresh extension to see accumulated versions
Check that 5 ranking versions exist before history appears
Privacy & Security
What Data Is Collected?
No personal data is collected from users
No telemetry or analytics are performed
Extension operates entirely offline
What Data Is Stored?
Ranking assessment data (OEM names, ratings, statements)
Historical ranking versions (last 5 assessments)
User filter preferences (search terms, selected filters)
All stored locally in browser storage
Data Size
Approximately 200-300 KB for all ranking data
Minimal browser storage usage
No impact on browser performance
Browser Compatibility
Browser
Support
Notes
Microsoft Edge

✅ Full

Requires Edge 90+

Google Chrome

⚠️ Partial

Use Chrome Web Store version

Chromium

✅ Likely

May require manual conversion

Firefox

❌ No

Uses Manifest V3 (Edge/Chrome only)

Safari

❌ No

Uses different extension format

Updates & Maintenance
Assessment Updates
Ranking assessments are updated periodically
Historical versions are preserved (last 5)
Check assessment date in popup for latest evaluation
Feature Updates
Check this README for any new features or changes.

Reporting Issues
If you encounter bugs or have feature requests, please document:

Edge browser version
Steps to reproduce
Expected vs. actual behavior
Browser console errors (F12)
License & Disclaimer
Disclaimer
This extension is provided "as-is" for informational purposes only. Rankings are based on publicly available privacy statements and corporate track records. Actual privacy practices may differ from stated policies.

Users should always review official privacy statements directly from OEM websites to understand data collection and usage practices.

Data Accuracy
Rankings reflect assessments as of March 15, 2026
Privacy policies are subject to change
Extension does not auto-update privacy statement links
Users should verify links and statements remain current
Not Legal Advice
This tool provides comparison information only and should not be considered legal advice. Consult privacy professionals for detailed compliance analysis.

About This Tool
Created By
Enterprise AI / Toyota GPT Team

Purpose
To provide consumers and researchers with easily accessible information about automotive OEM privacy statement quality and practices.

Data Source
OEM official privacy statements
Public corporate filings
Regulatory records and litigation information
Privacy policy analysis based on industry standards
Non-Affiliation
This extension is not affiliated with any automotive manufacturer. Rankings and assessments are independent evaluations based on privacy best practices.

Getting Help
Common Questions
Q: How often are rankings updated? A: Rankings are periodically reassessed. Check the assessment date in the popup. Historical versions (last 5) are maintained.

Q: Can I manually edit rankings? A: Current version is view-only. Manual ranking modification is not supported to maintain data integrity.

Q: Does this affect my browsing? A: No. Extension runs locally and does not monitor or modify your browsing activity.

Q: Can I use this on other browsers? A: This version is designed for Microsoft Edge. Chrome users can install the Chrome Web Store version.

Q: How is data stored? A: All data is stored locally in your browser using Chrome storage API. No cloud sync or external storage is used.

Q: What happens if I uninstall? A: All stored data is deleted when the extension is uninstalled. Re-installing will start with fresh default data.

Feature Roadmap (Future Enhancements)
 Auto-update OEM privacy statement links
 Manual ranking editing (user submissions)
 Cloud backup and sync across devices
 Compare two OEMs side-by-side
 Download full ranking reports (PDF format)
 Integration with browser bookmarks
 Dark/light theme toggle
 Multi-language support
Support & Feedback
For bug reports, feature requests, or general feedback regarding the Automotive OEM Privacy Ranking extension, please:

Check this README for troubleshooting steps
Review the FAQ section above
Verify all files are installed correctly
Document the issue with browser version and steps to reproduce
Version History
Version
Date
Changes
1.0.0

March 15, 2026

Initial release with 30 OEM rankings, historical tracking, and CSV export

Related Resources
GDPR Official Documentation
CCPA - California Privacy Rights
Mozilla Privacy Not Included
Your Rights Under CCPA
Final Notes
This extension represents a comprehensive assessment of automotive OEM privacy practices based on publicly available information. Users are encouraged to:

Review official privacy statements for complete details
Contact manufacturers with privacy questions or concerns
Submit feedback on privacy practices through manufacturer channels
Stay informed about data collection practices in connected vehicles
For consumers purchasing vehicles with connected services, understanding privacy practices is essential to making informed decisions about data sharing and personal privacy protection.

Last Updated: March 15, 2026
Current Version: 1.0.0
Status: Active & Maintained