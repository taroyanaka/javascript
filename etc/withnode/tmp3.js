// ({
// 	"plugins": ["jsdom-quokka-plugin"],
// })

const R = require(`ramda`);


const data1 = {
	nodes: [{
			id: "all",
			label: "all",
		},
		{
			id: "any",
			label: "any",
		},
		{
			id: "none",
			label: "none",
		},
		{
			id: "transduce",
			label: "transduce",
		},
	],
	edges: [{
			source: "all",
			target: "any",
		},
		{
			source: "all",
			target: "none",
		},
		{
			source: "all",
			target: "transduce",
		},
	]
};

const ar0 = [{
		id: "all",
		label: "all",
	},
	{
		id: "any",
		label: "any",
	},
	{
		id: "none",
		label: "none",
	},
	{
		id: "transduce",
		label: "transduce",
	},
]
const ar1 = [{
		source: "all",
		target: "any",
	},
	{
		source: "all",
		target: "none",
	},
	{
		source: "all",
		target: "transduce",
	},
]
let data2 = {
	nodes:ar0,
	edges:ar1
}

let data3=R.mergeAll(data2);
data3





const resource = [
	"all",
	"any",
	"none",
	"transduce"
]

let res0 =resource.map(V => {
	return {
		id: V,
		label: V
	}
})

let res1 = resource.map(V => {
	return {
		source: V,
		// target: V
		target: resource[0]
	}
})

let finalres = {
	nodes: res0,
	edges: res1
}

let finalres1 = R.mergeAll(finalres);
finalres1