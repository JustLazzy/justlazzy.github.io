---
title: Adding New Motel
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Create new file inside `jl-motel/shared/motel` for example we call it `newmotel.lua`

## Config Template

```lua title=jl-motel/shared/motel/yourmotel.lua
Config.Motel["newmotel"] = {
    renew = '2d', -- renew time it can only ends with d or w, likes 2d or 2w
    Blip = {
        -- https://docs.fivem.net/docs/game-references/blips/
        sprite = 475,
        -- https://docs.fivem.net/docs/game-references/blips/#blip-colors
        color = 12,
    },
    shell = 1, --Look at More Shell section
    Target = { -- Target configuration, true = use qb-target
        stash  = false,
        logout = true,
        outfit = false
    },
    owner = 'newmotel', -- it can be job name or citizenid
    label = "New Motel",
    mlo = true, -- is the motel or shell
    rent = {
        coords = vector4(325.03, -229.67, 54.22, 155.9) -- is where you rent the motel / where that guy stand
    },
    price = 110, -- Rent price
    motel = {
        -- Look at motel room section below

    }
}
```

## Motel Room

<Tabs>
  <TabItem value="Shell" default>
 All the explanation below the snippet

```lua
    ['newmotel:1'] = {
            enter = vector4(-111.11, 6322.67, 31.58, 138.97),
            label = "Dream View 1",
            locked = true,
            owned = false,
    },
```

  </TabItem>

  <TabItem value="MLO" >
  All the explanation below the snippet

```lua
   ["newmotel:1"] = {
           enter = vec3(306.848938, -213.674500, 54.371540),
           locked = true,
           label = "Pinkcage 1",
           owned = false,
           logout = {
               coords = vector3(303.58, -209.14, 54.27),
               width = 0.4,
               height = 0.4,
               name = "pinkcage:1:logout",
               heading = 334,
               minZ = 53.92,
               maxZ = 54.32
           },
           stash = {
               coords = vector3(306.87, -208.27, 54.23),
               width = 1.6,
               height = 1.8,
               name = "pinkcage:1:stash",
               heading = 339,
               minZ = 50.43,
               maxZ = 54.63,
           },
           outfit = {
               coords = vector3(302.43, -206.77, 54.23),
               width = 1.8,
               height = 1.4,
               name = "pinkcage:1:outfit",
               heading = 339,
               minZ = 53.18,
               maxZ = 55.38
           },
       },
```

  </TabItem>
 
</Tabs>

## More Shell

Search for this function

```lua title=jl-motel/client/custom.lua
function SpawnShell(coords, shell)
```

To add another shell is just simply by adding another elseif statement.

`data.shell` = export from [qb-interior](https://github.com/qbcore-framework/qb-interior/blob/main/client/main.lua) , example we are using CreateTier1House export

`data.coords` = a table of all the coords / basically it was a polyzone format for stash, outfit, and logout.

```lua
elseif shell == 3 then
    data.shell = exports[Config.ResourceSetting['interior']]:CreateTier1House(coords)
    data.coords = {
			stash = {
				coords = vector3(1.5715942382813, -3.262451171875, -28.218084335327),
				width = 1.5,
				height = 1.5,
				minZ = 1.5,
				maxZ = 2.0
			},
			outfit = {
				coords = vector3(1.3269348144531, 2.4752502441406, -28.990716934204),
				width = 2.0,
				height = 1,
				minZ = 1.5,
				maxZ = 2.0
			},
			logout = {
				coords = vector3(-6.0644607543945, 1.62255859375, -28.990716934204),
				width = 1.0,
				height = 1,
				minZ = 1.5,
				maxZ = 1.5
			}
    }
end
```
