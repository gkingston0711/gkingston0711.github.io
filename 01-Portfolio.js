//This will contain all JS
const sections = [ 'divHome', 'divAboutMe', 'divPrevWork', 'divProjects', 'divContactMe']
function pageLoad ()
{
    showSection(0);
}
function showSection (sectionIdx)
{
    sections.forEach((section, idx)=>{
        if (sectionIdx===idx)
        {
            $("#"+section).show();
        }
        else {
            $("#"+section).hide();
        }
    });
}
function contactMe(frm)
{
    const data ={
        yourName: frm.yourName.value,
        yourEmail: frm.yourEmail.value
    }
    alert("Send this to server: " +JSON.stringify(data));
    return false;
}