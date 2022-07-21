function Navbar() {
    return (
        <nav id="navbar">
            <img src="../src/assets/profile-photo.jpg" alt="profile image" width="317px" height = "317px"/>
            <h1 id="navbar-h1">Laura Smith</h1>
            <h2 id="navbar-h2">Frontend Developer</h2>
            <h3 id="navbar-h3">laurasmith.website</h3>
            <div id="navbar-btns">
                <button id="navbar-email-btn" class="navbar-btn"><i class="fa fa-envelope"/>&nbsp; Email</button>
                <button id="navbar-linkedin-btn" class="navbar-btn"><i class="fa-brands fa-linkedin"/>&nbsp; Linkedin</button>
            </div>
        </nav>
    )
}

export default Navbar