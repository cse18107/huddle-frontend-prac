import communityIcon from '../../../images/icon-communities.svg';
import messagesIcon from '../../../images/icon-messages.svg';
import './Section3.css';
const Section3 = () => {
    return <>
        <div className="section3_container">
            <div className="section3_content">
                <div className="content1">
                    <img src={communityIcon} />
                    <h1>1.4k+</h1>
                    <p>Communities Formed</p>
                </div>
                <div className="content2">
                    <img src={messagesIcon} />
                    <h1>2.7m+</h1>
                    <p>Messages Sent</p>
                </div>
            </div>
        </div>
    </>
}
export default Section3;