import './NewsModal.css'


const newsPool = {
    1: "certf1",
    2: "certf2",
    3: "certf3",
    4: "certf1",
    5: "certf2",
    6: "certf3"
}

const NewsModal = ({ isOpen, onClose, newsSelector, language, translations }) => {
    if (!isOpen) return null;

    const selectedService = newsPool[newsSelector]

    return (
        <div className='modalContainer' onClick={onClose}>
            <div className='serviceWrapper'>
                <div className='closeService'>
                    <i class='fa-solid fa-x'></i>
                </div>
                <div className='modal modalService' onClick={(e) => e.stopPropagation()}>
                    <div className='modalServiceImg'> </div>
                    <p>{translations[language].newsBy} ROBERT MENDOZA / {translations[language].newsDate1}</p>
                    <h2>{translations[language].newsH21}</h2>
                    <article>
                        <p className='bigP'>{translations[language].newsP11}</p>
                        <p>{translations[language].newsP12}</p>
                        <div className='newsQuote'>
                            <i class="fa-solid fa-quote-left"></i>
                            <p className='bigP'>{translations[language].newsP12}</p>
                        </div>
                        <p>{translations[language].newsP12}</p>
                    </article>
                    <div className='shareDiv'>
                        <strong>{translations[language].share} </strong>
                        <div className='facebookColor'>
                            <i class="fa-brands fa-facebook-f"></i>
                        </div>
                        <div className='xColor'>
                            <i class="fa-brands fa-x-twitter"></i>
                        </div>
                        <div className='linkedinColor'>
                            <i class="fa-brands fa-linkedin-in"></i>
                        </div>
                        <i></i>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NewsModal