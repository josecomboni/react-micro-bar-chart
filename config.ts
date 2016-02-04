var root = __CONFIG__.PACKAGES.filter((pkg) => pkg.name === 'react-micro-bar-chart')[0];

var config: RequireConfig = {
	packages: [
		{
      name: 'react-dom',
      location: root.location + '/bower_components/react',
      main: 'react-dom'
    },
    {
      name: 'react',
      location: root.location + '/bower_components/react',
      main: 'react'
    }
	],
	paths: {
		'da-d3': root.location + '/bower_components/d3/d3'
	},
	map: {		
    'react-micro-bar-chart': {
      'd3': 'd3',
      'React': 'react',
      'ReactDOM': 'react-dom'
    }
	}
};

export = config;


