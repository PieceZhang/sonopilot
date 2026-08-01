# SonoPilot website — Information Needed

All unresolved tokens are centralized in `assets/js/content.js`. The website checks for `{{...}}` values before rendering links or media, so no placeholder becomes a fake or empty clickable action.

## Market source

| Token | Please provide | Exact edit location | Website location | Current fallback |
|---|---|---|---|---|
| `{{MARKET_SOURCE_URL}}` | The verified URL for the cited Fortune Business Insights report. | `assets/js/content.js:15`, `links.marketSource` | Translation → Market opportunity | The PDF's citation is shown as plain text; the source-link action is hidden. |

## Optional short demo clips

The verified full demonstration is already linked on Home and Validation. These optional clips would allow the Validation page to expose individual capability segments in the future.

| Token | Please provide | Exact edit location | Website location | Current fallback |
|---|---|---|---|---|
| `{{NEEDLE_LOCALIZATION_CLIP_URL}}` | Verified needle-localization clip URL or project-relative media path. | `assets/js/content.js:17`, `links.clips.localization` | Validation → SonoPilot in action | Hidden; the verified full YouTube demo and poster remain visible. |
| `{{AUTONOMOUS_INSERTION_CLIP_URL}}` | Verified autonomous-insertion clip URL or project-relative media path. | `assets/js/content.js:18`, `links.clips.insertion` | Validation → SonoPilot in action | Hidden; the verified full YouTube demo and poster remain visible. |
| `{{PROBE_ADJUSTMENT_CLIP_URL}}` | Verified probe-adjustment clip URL or project-relative media path. | `assets/js/content.js:19`, `links.clips.probeAdjustment` | Validation → SonoPilot in action | Hidden; the verified full YouTube demo and poster remain visible. |
| `{{UNCERTAINTY_HANDLING_CLIP_URL}}` | Verified uncertainty-handling clip URL or project-relative media path. | `assets/js/content.js:20`, `links.clips.uncertainty` | Validation → SonoPilot in action | Hidden; the verified full YouTube demo and poster remain visible. |

## Profile links

| Token | Please provide | Exact edit location | Website location | Current fallback |
|---|---|---|---|---|
| `{{SHING_SHIN_CHENG_PROFILE_URL}}` | Verified institutional or personal profile URL. | `assets/js/content.js:116`, PI `profileUrl` | Team → Principal Investigator | Profile action hidden; verified role, affiliation, and portrait remain visible. |
| `{{YUELIN_ZHANG_PROFILE_URL}}` | Verified institutional or personal profile URL. | `assets/js/content.js:124`, Yuelin Zhang `profileUrl` | Team → SonoPilot Team | Profile action hidden; verified role, affiliation, and portrait remain visible. |
| `{{QINGPENG_DING_PROFILE_URL}}` | Verified institutional or personal profile URL. | `assets/js/content.js:132`, Qingpeng Ding `profileUrl` | Team → SonoPilot Team | Profile action hidden; verified role, affiliation, and portrait remain visible. |
| `{{ZHOUYANG_HONG_PROFILE_URL}}` | Verified institutional or personal profile URL. | `assets/js/content.js:140`, Zhouyang Hong `profileUrl` | Team → SonoPilot Team | Profile action hidden; verified role, affiliation, and portrait remain visible. |
| `{{LUOYAO_KANG_PROFILE_URL}}` | Verified institutional or personal profile URL. | `assets/js/content.js:148`, Luoyao Kang `profileUrl` | Team → SonoPilot Team | Profile action hidden; verified role, affiliation, and portrait remain visible. |
| `{{WENXUAN_XIE_PROFILE_URL}}` | Verified institutional or personal profile URL. | `assets/js/content.js:156`, Wenxuan Xie `profileUrl` | Team → SonoPilot Team | Profile action hidden; verified role, affiliation, and portrait remain visible. |
| `{{WEI_WANG_PROFILE_URL}}` | Verified institutional or personal profile URL. | `assets/js/content.js:164`, Wei Wang `profileUrl` | Team → Clinical Advisory Board | Profile action hidden; verified role and affiliation remain visible. |
| `{{SHING_YAN_RAYMOND_TANG_PROFILE_URL}}` | Verified institutional or personal profile URL. | `assets/js/content.js:173`, Shing-Yan Raymond Tang `profileUrl` | Team → Clinical Advisory Board | Profile action hidden; verified role and affiliation remain visible. |

## Clinical-advisor portraits

| Token | Please provide | Exact edit location | Website location | Current fallback |
|---|---|---|---|---|
| `{{WEI_WANG_PORTRAIT}}` | Approved portrait file placed in `assets/images/`, then set the field to its filename. | `assets/js/content.js:163`, Wei Wang `image` | Team → Clinical Advisory Board | Initials-based portrait tile (`WW`). |
| `{{SHING_YAN_RAYMOND_TANG_PORTRAIT}}` | Approved portrait file placed in `assets/images/`, then set the field to its filename. | `assets/js/content.js:172`, Shing-Yan Raymond Tang `image` | Team → Clinical Advisory Board | Initials-based portrait tile (`SY`). |

## Institutional logos

| Token | Please provide | Exact edit location | Website location | Current fallback |
|---|---|---|---|---|
| `{{INSTITUTION_LOGO_CUHK}}` | Approved CUHK logo file and confirmation of web-use permission. | `assets/js/content.js:177`, `institutionLogos.cuhk` | Team → Institutions | Logo omitted; verified institution name is shown as text. |
| `{{INSTITUTION_LOGO_SRIL}}` | Approved SRIL logo file and confirmation of web-use permission. | `assets/js/content.js:178`, `institutionLogos.sril` | Team → Institutions | Logo omitted; verified laboratory name is shown as text. |
| `{{INSTITUTION_LOGO_MMRC}}` | Approved Multi-scale Medical Robotics Center logo file and confirmation of web-use permission. | `assets/js/content.js:179`, `institutionLogos.mmrc` | Team → Institutions | Logo omitted; verified center name is shown as text. |
| `{{INSTITUTION_LOGO_SYSU_HOSPITAL}}` | Approved hospital logo file and confirmation of web-use permission. | `assets/js/content.js:180`, `institutionLogos.sysuHospital` | Team → Institutions | Logo omitted; verified hospital name is shown as text. |

## Already resolved from the supplied material

- GitHub Pages URL and website repository
- Full demonstration URL
- SonoPilot paper/arXiv URL
- Open-H-Embodiment paper URL
- MrTrack and MambaXCTrack DOI links
- DreamReg arXiv URL
- Four open-source repository URLs
- Project and PI contact emails
- Team roles, affiliations, six available portraits, and institutional names
- Social-preview image and favicon
