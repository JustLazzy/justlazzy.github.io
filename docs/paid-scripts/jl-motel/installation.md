---
id: installation
title: Installation
description: Guide to install jl-motel
sidebar_position: 1
---

:::danger Attention
Please read all of these carefully, don't rush, and keep focus, I don't recommend you doing this on 2am in the morning, go to sleep my friend 🙂
:::

### Import the database

You can use HeidiSQL to import the database, just drag and drop motel.sql to your query

### Inventory

**Go to your** `qb-inventory/html/js/app.js` **or** `lj-inventory/html/js/app.js` **and add this snippet**

```javascript
else if (itemData.name == "motel_key") {
      $(".item-info-title").html(
        "<p>" + itemData.label + " " + itemData.info.room.label + "</p>"
      );
      $(".item-info-description").html(
        "<p>" +
          itemData.description +
          "</p><p>" +
          "Motel: " +
          itemData.info.motel.label +
          "</p><p>" +
          "Room: " +
          itemData.info.room.label +
          "</p><p>" +
          "Owner: " +
          itemData.info.firstname +
          " " +
          itemData.info.lastname +
          "</p>" +
          "<p>" +
          "CID: " +
          itemData.info.owner +
          "</p>"
      );
    }
```

For example

```javascript
   else if (itemData.name == "weaponlicense") {
      $(".item-info-title").html("<p>" + itemData.label + "</p>");
      $(".item-info-description").html(
        "<p><strong>First Name: </strong><span>" +
          itemData.info.firstname +
          "</span></p><p><strong>Last Name: </strong><span>" +
          itemData.info.lastname +
          "</span></p><p><strong>Birth Date: </strong><span>" +
          itemData.info.birthdate +
          "</span></p>"
      );
    }
    // I PUT THE SNIPPET HERE
  else if (itemData.name == "motel_key") {
      $(".item-info-title").html(
        "<p>" + itemData.label + " " + itemData.info.room.label + "</p>"
      );
      $(".item-info-description").html(
        "<p>" +
          itemData.description +
          "</p><p>" +
          "Motel: " +
          itemData.info.motel.label +
          "</p><p>" +
          "Room: " +
          itemData.info.room.label +
          "</p><p>" +
          "Owner: " +
          itemData.info.firstname +
          " " +
          itemData.info.lastname +
          "</p>" +
          "<p>" +
          "CID: " +
          itemData.info.owner +
          "</p>"
      );
    }
```

### qb-core configuration

**Go to your** `qb-core/shared/items.lua` **and add this snippet**

```javascript title=qb-core/shared/items.lua
 ['motel_key']					 = {['name'] = 'motel_key',						['label'] = 'Motel Key',				['weight'] = 0,			['type'] = 'item',		['image'] = 'motel_key.png',			['unique'] = true,		['useable'] = true,		['shouldClose'] = true,	   ['combinable'] = nil,   ['description'] = 'Motel key'},
```

**Go to your** `qb-core/server/player.lua`**and find this**

```lua
    PlayerData.metadata['inside'] = PlayerData.metadata['inside'] or {
        house = nil,
        apartment = {
            apartmentType = nil,
            apartmentId = nil,
        },
    }
```

**Replace that with this**

```lua
    PlayerData.metadata['inside'] = PlayerData.metadata['inside'] or {
        house = nil,
        apartment = {
            apartmentType = nil,
            apartmentId = nil,
        },
        motel = {
            motel = nil,
            room = nil
        }
    }
```

### qb-spawn configuration

```lua
-- Search this
RegisterNUICallback('spawnplayer', function(data, cb)
```

Find `if type == "current"`and follow the method below

```lua
if type == "current" then
        PreSpawnPlayer()
        QBCore.Functions.GetPlayerData(function(pd)
            ped = PlayerPedId()
            SetEntityCoords(ped, pd.position.x, pd.position.y, pd.position.z)
            SetEntityHeading(ped, pd.position.a)
            FreezeEntityPosition(ped, false)
        end)
        if insideMeta.house ~= nil then
            local houseId = insideMeta.house
            TriggerEvent('qb-houses:client:LastLocationHouse', houseId)
        elseif insideMeta.apartment.apartmentType ~= nil or insideMeta.apartment.apartmentId ~= nil then
            local apartmentType = insideMeta.apartment.apartmentType
            local apartmentId = insideMeta.apartment.apartmentId
            TriggerEvent('qb-apartments:client:LastLocationHouse', apartmentType, apartmentId)
        end
        TriggerServerEvent('QBCore:Server:OnPlayerLoaded')
        TriggerEvent('QBCore:Client:OnPlayerLoaded')
        PostSpawnPlayer()
```

Replace with

```lua
if type == "current" then
        PreSpawnPlayer()
        QBCore.Functions.GetPlayerData(function(pd)
            ped = PlayerPedId()
            SetEntityCoords(ped, pd.position.x, pd.position.y, pd.position.z)
            SetEntityHeading(ped, pd.position.a)
            FreezeEntityPosition(ped, false)
        end)
        if insideMeta.house ~= nil then
            local houseId = insideMeta.house
            TriggerEvent('qb-houses:client:LastLocationHouse', houseId)
        elseif insideMeta.apartment.apartmentType ~= nil or insideMeta.apartment.apartmentId ~= nil then
            local apartmentType = insideMeta.apartment.apartmentType
            local apartmentId = insideMeta.apartment.apartmentId
            TriggerEvent('qb-apartments:client:LastLocationHouse', apartmentType, apartmentId)
        elseif insideMeta.motel ~= nil and insideMeta.motel.motel ~= nil and insideMeta.motel.room ~= nil then
            local motel = insideMeta.motel.motel
            local room = insideMeta.motel.room
            TriggerEvent('jl-motel:client:spawnLastLocation', motel, room)
        end
        TriggerServerEvent('QBCore:Server:OnPlayerLoaded')
        TriggerEvent('QBCore:Client:OnPlayerLoaded')
        PostSpawnPlayer()
```
