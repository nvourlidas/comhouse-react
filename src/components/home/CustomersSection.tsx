import pollasglass   from '../../assets/logo-pollasglass.png'
import latrovalis    from '../../assets/latrovalislogo.webp'
import mediplants    from '../../assets/logo_mediplants.png'
import salateskronos from '../../assets/logo_salateskronos.png'
import kafestidis    from '../../assets/kafestidis-logo.png'
import alevras       from '../../assets/alevras-logo.jpg'
import ouzokoulas    from '../../assets/Logo_ouzokoulas.png'
import glasscleaning from '../../assets/logo-glasscleaning.png'
import frantzeskos   from '../../assets/logo-frantzeskos.png'
import mpoudouris    from '../../assets/logo-mpoudouris-tra.png'
import biomed        from '../../assets/biomed-logo.png'
import symbolo       from '../../assets/symbolo-logo.jpg'
import ouzo5        from '../../assets/OUZO5-logo.webp'
import alarmexpress from '../../assets/logo-alarmexpress.png'
import { FadeUp }    from '../ScrollReveal'

const row1 = [
  { name: 'Pollas Glass',   src: pollasglass   },
  { name: 'Latrovalis',     src: latrovalis    },
  { name: 'Salates Kronos', src: salateskronos },
  { name: 'Kafestidis',     src: kafestidis    },
  { name: 'Alevras',        src: alevras       },
  { name: 'Alarm Express',  src: alarmexpress  },
  { name: 'Frantzeskos',    src: frantzeskos   },
]

const row2 = [
  { name: 'Ouzokoulas',     src: ouzokoulas,   scale: 1.5 },
  { name: 'Glass Cleaning', src: glasscleaning },
  { name: 'Mediplants',     src: mediplants,   scale: 1.5 },
  { name: 'Mpoudouris',     src: mpoudouris,   scale: 1.5 },
  { name: 'Biomed',         src: biomed        },
  { name: 'Symbolo',        src: symbolo       },
  { name: 'Ouzo 5',         src: ouzo5         },
]

function LogoRow({ logos, reverse = false }: { logos: typeof row1; reverse?: boolean }) {
  return (
    <div className={`flex flex-nowrap ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
      {[0, 1].map(setIdx => (
        <div key={setIdx} className="flex flex-nowrap gap-16 pr-16 shrink-0" aria-hidden={setIdx === 1 || undefined}>
          {logos.map((c, i) => (
            <div
              key={i}
              className="shrink-0 flex items-center justify-center h-16 w-[18vw] max-w-55 min-w-30 opacity-75 hover:opacity-100 transition-opacity duration-300 cursor-default"
            >
              <img
                src={c.src}
                alt={c.name}
                className="max-h-full max-w-full object-contain select-none transition-transform duration-300"
                style={{ transform: `scale(${'scale' in c ? c.scale : 1})` }}
                draggable={false}
              />
            </div>
          ))}
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
