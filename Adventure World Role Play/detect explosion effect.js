execute as @e[type=trident,limit=1] at @s
  if entity @e[distance=..2.5,type=!item,type=!player,type=!trident]
    run particle minecraft:explosion ~ ~ ~ 0.3 0.3 0.3 1 1
