
export const Footer = (props) => {
    const { contactNo, webLink } = props;
    return (
        <div className="footer">
            <h4>Contact: {contactNo}</h4>
            <h4>Web Link: {webLink}</h4>
        </div>
    )
};
