const cookie = {};

cookie.getCookie = (req) => {
    const cookie = req.get('Cookie').split(';')[1].trim().split('=')[1];
    req.cookie = cookie;
    req.session.name = "Rodrigo";
}

cookie.setCookie = (res) => {
    res.setHeader('Set-Cookie', 'id=valor_cookie; HttpOnly');
}

module.exports = cookie;