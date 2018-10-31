 import { senatorData } from './senators.js';

 console.log(senatorData);

 const senators = senatorData.results[0].members;
 const republicans = senators.filter(senator => senator.party == 'R');
 const democrats = senators.filter(senator => senator.party === 'D');
 const females = senators.filter(senator => senator.gender === 'F');
 const males = senators.filter(senator => senator.gender === 'M');

 const loyalRepublican = republicans.reduce((acc, senator) => senator.votes_with_party_pct > 0 ? senator : acc, 0);

 console.log(`There are ${republicans.length} republicans and ${democrats.length} democrats in the senate.`);

 console.log(`The most loyal republican is ${loyalRepublican.first_name} ${loyalRepublican.last_name} from ${loyalRepublican.state} who votes with republicans ${loyalRepublican.votes_with_party_pct}% of the time.`);
 