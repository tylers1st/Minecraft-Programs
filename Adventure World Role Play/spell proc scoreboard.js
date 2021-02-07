execute as @e[type=trident,limit=1] at @s
if entity @e[type=trident,limit=1]
  run scoreboard players add @p SpellProc 1
