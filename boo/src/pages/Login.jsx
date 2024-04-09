import React from 'react';

export default function Login() {
    return (
        <div className='fullPageBackground'>
            <div className='BodyLogin' style={{ marginRight: '28em' }}>
                <div className="container">
                    <div className="d-flex justify-content-center h-100" style={{marginTop:'15em'}}>
                        <div className="card">
                            <div className="card-header">
                                <h3 style={{ fontSize: '24px' }}>Sign In</h3>
                                <div className="d-flex justify-content-end social_icon">
                                    <span><i className="fab fa-facebook-square"></i></span>
                                    <span><i className="fab fa-google-plus-square"></i></span>
                                    <span><i className="fab fa-twitter-square"></i></span>
                                </div>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="input-group form-group">
                                        <input type="text" className="form-control" style={{ width: 'calc(100% - 80px)', padding: '10px', direction: 'rtl' }} placeholder="אימייל" />
                                    </div>
                                    <div className="input-group form-group">
                                        <input type="password" className="form-control" style={{ width: 'calc(100% - 80px)', padding: '10px', direction: 'rtl' }} placeholder="סיסמא" />
                                    </div>

                                    <div className="form-group form-group2">
                                        <input type="submit" value="התחברות" className="btn float-right login_btn" style={{ fontSize: '22px' }} />
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex justify-content-center links DontAccout" style={{ fontSize: '20px', color: '' }}>
                                    אין לך חשבון?  <a style={{ color: '#5bb9cf' }} href="">הרשמה</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
