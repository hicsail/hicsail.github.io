var favIcon =
  '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';
var docHead = document.getElementsByTagName('head')[0];
var newLink = document.createElement('link');
newLink.rel = 'shortcut icon';
newLink.type = 'image/x-icon';
newLink.href = 'data:image/png;base64,' + favIcon;
docHead.appendChild(newLink);

var background = '#000000';

var theme = ['#E0533B', '#EBB54A', '#94ED6B', '#73A6FC', background];
var texttheme = ['#E0533B', '#EBB54A', '#94ED6B'];
/**
 * Get random color from colors array based on a point in a given integer range.
 * The probability of white being selected is parameterized by the point.
 * @returns {string} hex color value.
 */
function randomColor(probability, colors) {
  var colors = colors != null ? colors : theme;
  return Math.random() <= probability
    ? colors[Math.round(Math.random() * (colors.length - 1))]
    : background;
}

var projects = [
  {
    icons: ['institution', 'gavel', 'balance-scale'],
    title: 'Amicus Curiae Briefs',
    text: 'A web-based query interface for a data set describing the network of amicus curiae briefs (and signing organizations) filed in support of or against a side in Supreme Court cases over the past century.',
    investigators:
      '<a href="http://www.bu.edu/polisci/people/faculty/christenson/">Dino Christenson</a>, Associate Professor, CAS Political Science',
    interns: 'Raphael Baysa',
  },
  {
    icons: ['mobile', 'commenting-o'],
    title: 'Smoking Cessation Mobile App',
    text: 'Development and deployment (within the context of a study) of a behavioral intervention mobile app to help individuals interested in quitting smoking.',
    investigators:
      '<a href="https://www.bu.edu/dental/profile/belinda-borrelli/">Belinda Borrelli</a>, Professor, SDM',
    interns: 'Jacqueline You, David Wang, Ekaterina Prokopeva',
  },
  {
    icons: ['check-square-o', 'bar-chart'],
    title: 'Spinal Cord Injury - Functional Index',
    text: 'Construction of an adaptive web survey platform (including an accessible front-end web application, back-end database and API, and algorithm translations) to help spinal cord injury patients assess their progress.',
    investigators:
      '<a href="https://www.bu.edu/sph/profile/mary-slavin/">Mary Slavin</a>, Research Assistant Professor, SPH',
    interns: '',
  },
  /*{ 'icons': ['shopping-cart'],
    'title': 'IKEA Data Record Linkage',
    'text': 'Using machine learning techniques to solve the record linkage problem for a data set to enable the identification and comparison of IKEA catalogue items across seven countries over decades.',
    'investigators': '<a href="http://people.bu.edu/mbaxter/">Marianne Baxter</a>, Professor, CAS Economics',
    'interns': ''
  },*/
  {
    icons: ['flask'],
    title: 'Clotho Synthetic Biology Framework',
    text: 'Development of the latest production-ready version of a framework for engineering synthetic biological systems and managing the data used to create them.',
    investigators:
      '<a href="http://cidarlab.org/doug-densmore/">Douglas Densmore</a>, Associate Professor, ENG ECE',
    interns: '',
  },
  {
    icons: ['eye'],
    title: 'Eye Tracking',
    text: 'Unifying, converting, and enhancing a mix of scripts for parsing eye tracking data, with a particular focus on automatically interpolating data produced by eye tracking hardware used for experiments in cognitive science and linguistics.',
    investigators:
      '<a href="http://blogs.bu.edu/sarunach/">Sudha Arunachalam</a>, Assistant Professor, SAR',
    interns: '',
  },
  {
    icons: ['book', 'graduation-cap'],
    title: 'Views of Education across Nations',
    text: 'Application of natural language processing techniques (NLP) such as frequency analysis, sentiment analysis, and topic modeling to a data set of British and Danish novels to explore how views of education influence historical trends.',
    investigators:
      '<a href="https://www.bu.edu/polisci/people/faculty/martin/">Cathie Jo Martin</a>, Professor, CAS Political Science',
    interns: '',
  },
  {
    icons: ['bolt', 'plug'],
    title: 'Power Grid Topology Control Optimization',
    text: 'Porting, profiling, parallelizing, and optimizing algorithms that control power grid transmission topologies (in preparation for incorporation of the algorithms into production-quality applications).',
    investigators:
      '<a href="http://www.bu.edu/pcms/caramanis/">Michael Caramanis</a>, Prof. &amp; <a href="http://www.bu.edu/eng/profile/pablo-a-ruiz-phd/">Pablo Ruiz</a>, Research Assoc. Prof., ENG',
    interns: '',
  },
  /*{ 'icons': ['users', 'lock'],
    'title': 'Multi-Party Computation for 100% Talent',
    'text': 'Design, implementation, and deployment of a secure protocol and web application to <a href="https://www.bu.edu/today/2015/computational-thinking-breaks-a-logjam/">support a secure data collection process</a> involving <a href="http://www.bostonwomensworkforcecouncil.com/corporate-signatories/">over 100</a> of the largest employer organizations in Boston.',
    'investigators': '<a href="http://www.bostonwomensworkforcecouncil.com/">Boston Women\'s Workforce Council</a> &amp; <a href="https://www.boston.gov/">City of Boston</a>',
    'interns': ''
  },*/
  {
    icons: ['users', 'lock'],
    title: 'Deployment of Multi-Party Computation',
    text: 'Design, implementation, and <a href="https://www.bu.edu/today/2015/computational-thinking-breaks-a-logjam/">deployment</a> of web applications that deliver <a href="https://multiparty.org">modern cryptographic capabilities</a> to public and private organizations hoping to analyze their data securely.',
    investigators:
      '<a href="https://www.boston.gov/">City of Boston</a>, <a href="http://www.bostonwomensworkforcecouncil.com/">BWWC</a>, <a href="http://www.honda-ri.com/">HRI</a>, and others',
    interns: '',
  },
];

function listProjects() {
  var div = document.getElementById('pjct');
  if (div == null) return;
  var colors = _.shuffle(texttheme);
  // goodbye table :'( you will be missed
  // var template = function (p, i) { return '<table>' +
  //   '<tr><td><i style="color:' + colors[i%4] + ';" class="fa fa-' + p.icons[Math.floor(Math.random()*p.icons.length)] + '"></i></td><td><span>' + p.title + '</span></td></tr>' +
  //   '<tr><td></td><td style="font-size:16px;"><p>' + p.text + '</p></td></tr>' +
  //   '<tr><td></td><td style="font-size:16px;"><b>PI(s):</b> ' + p.investigators + '</td></tr>' +
  //   //'<tr><td></td><td style="font-size:16px;"><b>Interns:</b> ' + p.interns + '</td></tr>'
  //   '</table>'; };
  var template = function (p, i) {
    return (
      '<div>' +
      // '<i style="color:' + colors[i%4] + ';" class="fa fa-' + p.icons[Math.floor(Math.random()*p.icons.length)] + '"></i>' +
      // '<span style="color:' + colors[i%4] + '">' + p.title + '</span>' +
      '<span>' +
      p.title +
      '</span>' +
      '<p>' +
      p.text +
      '</p>' +
      '<b>PI(s):</b> ' +
      p.investigators +
      '</div>'
    );
  };
  for (var i = 0; i < projects.length; i++)
    div.innerHTML += template(projects[i], i);
}
