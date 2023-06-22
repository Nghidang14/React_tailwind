import poke1 from '../../assets/pokemon1.jpg'
import poke2 from '../../assets/Pokemon2.jpg'
import poke3 from '../../assets/Pokemon3.jpg'
import poke4 from '../../assets/Pokemon4.jpg'
import poke5 from '../../assets/Pokemon5.jpg'
import poke6 from '../../assets/Pokemon6.jpg'
import poke7 from '../../assets/Pokemon7.jpg'
import poke8 from '../../assets/Pokemon8.jpg'
import poke9 from '../../assets/Pokemon9.jpg'
import poke10 from '../../assets/Pokemon10.jpg'


export interface Movie {
	src: string
	title: string
	main: string
	runtime: string
}

export const moviesData: Movie[] = [
	{
		src: poke1,
		title: 'Pokemon Rainbow!',
		main: 'Satoshi',
		runtime: '120m'
	},
	{ 
		src: poke2,
		title: 'I Choose You!',
		main: 'Satoshi',
		runtime: '120m' 
	},
	{
		src: poke3,
		title: 'Pokemon Celebrity',
		main: 'Satoshi',
		runtime: '120m'
	},
	{
		src: poke4,
		title: 'Pokemon Detective',
		main: 'Satoshi',
		runtime: '120m'
	},
	{
		src: poke5,
		title: 'Pokemon Volcanion',
		main: 'Satoshi',
		runtime: '120m'
	},
	{
		src: poke6,
		title: 'Pokemon Best Wish',
		main: 'Satoshi',
		runtime: '120m'
	},
	{
		src: poke7,
		title: 'I Choose You 2',
		main: 'Satoshi',
		runtime: '120m'
	},
	{
		src: poke8,
		title: 'Pokemon Mewtwo2',
		main: 'Satoshi',
		runtime: '120m'
	},
	{
		src: poke9,
		title: 'Pokemon War',
		main: 'Satoshi',
		runtime: '120m'
	},
	{
		src: poke10,
		title: 'Pokemon Yveltal',
		main: 'Satoshi',
		runtime: '120m'
	}
]
