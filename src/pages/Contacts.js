const Contacts = () => {
    return (  
    <main className="section">
    <div className="container">
            <h1 className="title-1">Contacts</h1>

            <ul className="content-list">
                <li className="content-list__item">
                    <h2 className="title-2">Location</h2>
                    <p>Poland, Toruń</p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Telegram</h2>
                    <p><a href="tel:+48794141738">+48 794-141-738</a></p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Email</h2>
                    <p><a href="mailto:shapovalov.pr@gmail.com">shapovalov.pr@gmail.com</a></p>
                </li>
            </ul>

    </div>
</main> );
}
 
export default Contacts;