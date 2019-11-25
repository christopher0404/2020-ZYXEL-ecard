# ZYXEL Season's Greetings 2020

### [main.js](js/main.js)  

##### Redirect if mobile or tablet detected  

```JavaScript
    if (isTablet()) {
        document.location = "replace URL here";
    }

    if (isMobile.Android()) {
        document.location = "replace URL here";
    }

    if (isMobile.iOS() && iosVer.version < 13) {
        alert("Please update to iOS 13");
        document.location = "replace URL here";
    }
```

---

> Author: Christopher Chu 朱郡廷  
  Link: <https://zhujunting.myportfolio.com>

