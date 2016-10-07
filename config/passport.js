/**
 * Passport configuration file where you should configure strategies
 */
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var JwtStrategy = require('passport-jwt').Strategy;

var ExtractJwt = require('passport-jwt').ExtractJwt;

var EXPIRES_IN = '2d';
var SECRET = process.env.tokenSecret || "4ukI0uIVnB3iI1yxj646fVXSE3ZVk4doZgz6fTbNg7jO41EAtl20J5F7Trtwe7OM";
var ALGORITHM = "HS256";

module.exports.jwtSettings = {
    expiresIn: EXPIRES_IN,
    secret: SECRET,
    algorithm: ALGORITHM,
};
/**
 * Configuration object for local strategy
 */
var LOCAL_STRATEGY_CONFIG = {
    usernameField: 'identifier',
    passwordField: 'password',
};

/**
 * Configuration object for JWT strategy
 */
var JWT_STRATEGY_CONFIG = {
    secretOrKey: SECRET,

    jwtFromRequest: ExtractJwt.fromAuthHeader(),
};

/**
 * Triggers when user authenticates via local strategy
 */
function _onLocalStrategyAuth(identifier, password, next) {

    User.findOne(
        {
            or: [
                {username: identifier},
                {email: identifier}
            ]
        })
        .exec(function (error, user) {
            if (error) return next(error, false, {});
            if (!user || !SecurityService.comparePassword(password, user)) {
                return next(null, false, {})
            }
            return next(null, user, {});
        });
}

/**
 * Triggers when user authenticates via JWT strategy
 */
function _onJwtStrategyAuth(payload, next) {
    var user = payload.user;
    return next(null, user, {});
}

passport.use(
    new LocalStrategy(LOCAL_STRATEGY_CONFIG, _onLocalStrategyAuth)
);

passport.use(
    new JwtStrategy(JWT_STRATEGY_CONFIG, _onJwtStrategyAuth)
);

