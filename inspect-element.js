//This lets you edit text in a website. Execute the bookmarklet and all texts will act as fields that you can edit. Execute the 
//bookmarklet again to turn it off and lock in the edits.

javascript:if(document.body.contentEditable !== 'true') {
    document.body.contentEditable = 'true'; document.designMode='on'; void 0
} else {
    document.body.contentEditable = 'false'; document.designMode='off'; void 0
}
