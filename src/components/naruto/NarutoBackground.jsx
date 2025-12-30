import { useEffect, useState } from "react"
import {
  AkatsukiCloud,
  UchihaFan,
  UzumakiSpiral,
  HyugaMagatama,
  NaraCircle,
  YamanakaFlower,
  InuzukaPaw,
  AburameBeetle,
  LeafVillage,
  SandVillage,
  CloudVillage,
  MistVillage,
  StoneVillage,
  Sharingan,
  Byakugan,
  Rinnegan,
  SenjuClan,
  SoundVillage,
  RainVillage,
  AkimichiClan,
  SabakuClan,
} from "./ClanSymbols"

const clanSymbols = [
  { Component: AkatsukiCloud, color: "text-red-600", name: "akatsuki" },
  { Component: UchihaFan, color: "text-red-700", name: "uchiha" },
  { Component: UzumakiSpiral, color: "text-orange-500", name: "uzumaki" },
  { Component: Sharingan, color: "text-red-500", name: "sharingan" },
  { Component: Rinnegan, color: "text-purple-500", name: "rinnegan" },
  { Component: Byakugan, color: "text-purple-300", name: "byakugan" },
  { Component: HyugaMagatama, color: "text-purple-400", name: "hyuga" },
  { Component: LeafVillage, color: "text-green-600", name: "leaf" },
  { Component: SandVillage, color: "text-yellow-600", name: "sand" },
  { Component: CloudVillage, color: "text-blue-400", name: "cloud" },
  { Component: MistVillage, color: "text-cyan-500", name: "mist" },
  { Component: StoneVillage, color: "text-gray-500", name: "stone" },
  { Component: NaraCircle, color: "text-yellow-700", name: "nara" },
  { Component: YamanakaFlower, color: "text-pink-400", name: "yamanaka" },
  { Component: InuzukaPaw, color: "text-amber-700", name: "inuzuka" },
  { Component: AburameBeetle, color: "text-green-700", name: "aburame" },
  { Component: SenjuClan, color: "text-emerald-600", name: "senju" },
  { Component: SoundVillage, color: "text-violet-500", name: "sound" },
  { Component: RainVillage, color: "text-blue-600", name: "rain" },
  { Component: AkimichiClan, color: "text-orange-600", name: "akimichi" },
  { Component: SabakuClan, color: "text-amber-500", name: "sabaku" },
]

export function NarutoBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Create 25 floating symbols
  const floatingSymbols = Array.from({ length: 25 }, (_, i) => {
    const symbolData = clanSymbols[i % clanSymbols.length]
    return {
      ...symbolData,
      id: i,
      size: 40 + Math.random() * 80,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 20 + Math.random() * 40,
      delay: Math.random() * -30,
      opacity: 0.03 + Math.random() * 0.12,
      rotation: Math.random() * 360,
    }
  })

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {floatingSymbols.map((symbol) => {
        const { Component } = symbol
        return (
          <div
            key={symbol.id}
            className={`absolute ${symbol.color}`}
            style={{
              left: `${symbol.left}%`,
              top: `${symbol.top}%`,
              width: `${symbol.size}px`,
              height: `${symbol.size}px`,
              opacity: symbol.opacity,
              animation: `floatClanSymbol ${symbol.duration}s linear infinite`,
              animationDelay: `${symbol.delay}s`,
              transform: `rotate(${symbol.rotation}deg)`,
            }}
          >
            <Component className="w-full h-full" />
          </div>
        )
      })}
    </div>
  )
}
