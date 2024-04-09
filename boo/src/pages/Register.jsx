import React from 'react';

export default function Register() {
  return (
    <div>
      <section className="p-3 p-md-4 p-xl-5" >
        <div className="container">
          <div className="row" >
            <div className="col-12 col-md-6 bsb-tpl-bg-platinum d-flex align-items-center justify-content-center" style={{backgroundColor:'red'}}>

              <div className="d-flex flex-column justify-content-between p-3 p-md-4 p-xl-5" style={{marginBottom:'28em'}} >
                <h3 id='boo' className="m-0" style={{ fontSize:'44px'}} >BOO</h3>
              
              </div>
            </div>
            <div className="col-12 col-md-6 bsb-tpl-bg-lotion"  >
              <div className="p-3 p-md-4 p-xl-5" style={{backgroundColor:'#aaafb3'}}>
                <div className="row">
                  <div className="col-12">
                    <div className="mb-5" style={{direction:'rtl'}}>
                      <h2 className="h3">הרשמה</h2>
                      <h3 className="fs-6 fw-normal text-secondary m-0">
                        הכנס את הפרטים
                      </h3>
                    </div>
                  </div>
                </div>
                <form action="#!">
                  <div className="row gy-3 gy-md-4 overflow-hidden" style={{ direction: 'rtl' }} >
                    <div className="col-12">
                      <label htmlFor="firstName" className="form-label">
                        שם מלא <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        id="firstName"
                        placeholder="שם מלא"
                        required
                      />
                    </div>

                    <div className="col-12" style={{ direction: 'rtl' }}>
                      <label htmlFor="email" className="form-label">
                        כתובת מייל <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="name@example.com"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="password" className="form-label">
                        סיסמא <span className="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="password" className="form-label">
                        אימות סיסמא <span className="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          name="iAgree"
                          id="iAgree"
                          required
                        />
                        <label className="form-check-label text-secondary" htmlFor="iAgree">
                         אני הסכמתי {' '}
                          <a href="#!" className="link-primary text-decoration-none">
                            לתנאי השימוש
                          </a>
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button style={{backgroundColor:'rgba(13, 110, 253, .25)'}} className="btn bsb-btn-xl btn-primary" type="submit">
                          הרשמה
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
