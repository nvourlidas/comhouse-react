import pollasglass   from '../../assets/logo-pollasglass.png'
import latrovalis    from '../../assets/latrovalislogo.webp'
import mediplants    from '../../assets/logo_mediplants.png'
import salateskronos from '../../assets/logo_salateskronos.png'
import kafestidis    from '../../assets/kafestidis-logo.png'
import alevras       from '../../assets/alevras-logo.jpg'
import ouzokoulas    from '../../assets/Logo_ouzokoulas.png'
import glasscleaning from '../../assets/logo-glasscleaning.png'
import frantzeskos   from '../../assets/logo-frantzeskos.png'
import mpoudouris    from '../../assets/logo-mpoudouris.jpg'
import biomed        from '../../assets/biomed-logo.png'
import symbolo       from '../../assets/symbolo-logo.jpg'
import { FadeUp }    from '../ScrollReveal'

const row1 = [
  { name: 'Pollas Glass',   src: pollasglass   },
  { name: 'Latrovalis',     src: latrovalis    },
  { name: 'Mediplants',     src: mediplants    },
  { name: 'Salates Kronos', src: salateskronos },
  { name: 'Kafestidis',     src: kafestidis    },
  { name: 'Alevras',        src: alevras       },
]

const row2 = [
  { name: 'Ouzokoulas',     src: ouzokoulas    },
  { name: 'Glass Cleaning', src: glasscleaning },
  { name: 'Frantzeskos',    src: frantzeskos   },
  { name: 'Mpoudouris',     src: mpoudouris    },
  { name: 'Biomed',         src: biomed        },
  { name: 'Symbolo',        src: symbolo       },
]

function LogoRow({ logos, reverse = false }: { logos: typeof row1; reverse?: boolean }) {
  return (
    <div className={`flex gap-16 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
      {[...logos, ...logos].map((c, i) => (
        <div
          key={i}
          className="flex-shrink-0 flex items-center justify-center h-16 w-[18vw] max-w-55 min-w-30  opacity-75 hover:opacity-100 transition-opacity duration-300 cursor-default"
        >
          <img
            src={c.src}
            alt={c.name}
            className="max-h-full max-w-full object-contain select-none"
            draggable={false}
          />
        </div>
      ))}
    </div>
  )
}

export default function CustomersSection() {
  return (
    <section
      className="py-20"
      style={{ background: 'linear-gradient(to bottom, #1d4ed8 0%, #3b82f6 40%, #bfdbfe 68%, #ffffff 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <FadeUp>
          <span className="text-blue-300 font-bold text-xs uppercase tracking-[0.2em]">
            Πελάτες μας
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            Μας Εμπιστεύονται
          </h2>
          <p className="mt-3 text-slate-300 max-w-xl">
            Επιχειρήσεις από διαφορετικούς κλάδους επιλέγουν τις λύσεις της ComHouse για την ψηφιακή τους ανάπτυξη.
          </p>
        </FadeUp>
      </div>

      <div
        className="overflow-hidden flex flex-col gap-8"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
        }}
      >
        <LogoRow logos={row1} />
        <LogoRow logos={row2} reverse />
      </div>
    </section>
  )
}
