import courses from "../courses.json";

const Card = ({ color }) => {

    return (
        <div className='card--container'>
            {courses.map(course => (
                <div key={course.id} className="card">
                    <div className='course--img'>
                        {course.is_favorite ? (
                            <span className="span"><i className="fa-solid fa-star"></i>New lesson</span>) : (
                            <span className="span2"><i className="fa-solid fa-star"></i>Old lesson</span>
                        )}
                        <img src={course.image} alt="course" />
                    </div>
                    <div className='course--content' style={{ borderLeft: `5px solid ${color ? "#42c022" : "#fcbf36"}` }}>
                        <div className='course--text'>
                            <button className='go--btn' style={{ backgroundColor: `${color ? "#42c022" : "#fcbf36"}` }}>
                                {color ? "Go lesson" : "Go resource"}
                            </button>
                            <h4>{course.company_name}</h4>
                            <p>{course.country} -</p>
                            <p>{course.title}</p>
                        </div>
                        <div className='icon--card'>
                            <div className='heart--icon' style={{ color: `${course.is_favorite ? "red" : "gray"}` }}>
                                <i className="fa-solid fa-heart"></i>
                            </div>
                            <div className='flag--icon'>
                                <i className="fa-brands fa-canadian-maple-leaf"></i>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;