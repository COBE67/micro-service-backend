const Senators = require('./senator');
const { send } = require('micro');
const { router, get } = require('microrouter');


const home = (req, res) => send(res, 200, Senators )
const republic = (req, res) => send(res, 200, republicans ());
const demo = (req, res) => send(res, 200, democrats ());
const st = (req, res) => send(res, 200, byState ());
const indi = (req, res) => send(res, 200, independents ());

module.exports = router(get('/', home), get('/republicans', republic), get('/democrats', demo), get('/states', st), get('/independents', indi));





const republicans = () => {
  return Senators.filter(Senators => Senators.party === "Republican")
};

const democrats = () => {
  return Senators.filter(Senators => Senators.party === "Democrat")
};

const independents = () => {
  return Senators.filter(Senators => Senators.party === "Independent")
};

const males = () => {
  return Senators.filter(Senators => Senators.person.gender === "male" )
};

const females = () => {
  return Senators.filter(Senators => Senators.person.gender === "female")
};

const byState = (state = 'UT') => {
  return Senators.filter(Senators => Senators.state === state)
};

const mapping = () => {
  return Senators.map(Senators  => {
    return {
      firstName: Senators.person.firstname,
      lastName: Senators.person.lastname,
      party: Senators.party,
      gender: Senators.person.gender
    }
  })

};

const birthplaceSeniorSenator = () => {
    let birthState = byState();
    let seniorSenator = birthState.filter(Senators => Senators.senator_rank === "senior");
  return seniorSenator.reduce((acummulat, currentValue)=> currentValue);
};


const REPLACE_ME_WITH_CODE = false;

