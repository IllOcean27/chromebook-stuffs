// Click on this bookmarklet when loading in to a YouTube video to activate.

javascript:(h=>{/youtube/.test(h+=location)?location=`//www.youtube-nocookie.com/embed/${[h.match`(?<=[ve]/|u/\w+/|embed/|v=)[^%23&?]*`]}?autoplay=1`:0})``
