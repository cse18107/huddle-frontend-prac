import bg_section_top_desktop_1 from "../../../images/bg-section-top-desktop-1.svg"
import bg_section_bottom_desktop_1 from "../../../images/bg-section-bottom-desktop-1.svg"
import './Section4.css';
import grow_together from '../../../images/illustration-grow-together.svg'
const Section4 = () => {
    return <>
        <div className="section4_container">
            <div className="section4_content">
                <div className="part1">
                    <div className="part1_top">
                        <img className="bg_sections" src={bg_section_top_desktop_1} />
                    </div>
                    <div className="part1_middle">
                        <div className="part1_middle_left">
                            <h2>Grow Together</h2>
                            <p>Generate meaningful discussions with your audience and build a string, loyal community. Think of the insightful conversations you miss out on with a feedback form.</p>
                        </div>
                        <div className="part1_middle_right">
                            <img className="grow_together" src={grow_together} />
                        </div>
                    </div>
                    <div className="part1_bottom">
                        <img className="bg_sections" src={bg_section_bottom_desktop_1} />
                    </div>
                </div>
                <div className="part2"></div>
                <div className="part3"></div>
            </div>
        </div>
    </>
}
export default Section4;