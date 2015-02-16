
var Block = function( name, id, data ) {
  this.name = name;
  this.id = id;
  this.data = data;
  this.placed = 0;
  this.broken = 0;
}

var Blocks = function( ) { 
  this.lookup = {};

  var stone             = new Block("Stone", 1, [0]);
  var granite           = new Block("Granite", 1, [1]);
  var polishedGranite   = new Block("Polished Granite",  1, [2]);
  var diorite           = new Block("Diorite", 1, [3]);
  var polishedDiorite   = new Block("Polished Diorite", 1, [4]);
  var andesite          = new Block("Andesite", 1, [5]);
  var polishedAndesite  = new Block("Polished Andesite", 1, [6]);
  this.lookup["1"] = [
    stone, granite, polishedGranite, diorite, polishedDiorite, andesite, polishedAndesite 
  ];

  var grass             = new Block("Grass", 2, [0]);
  this.lookup["2"] = [
    grass
  ];

  var dirt              = new Block("Dirt", 3, [0]);
  var coarseDirt        = new Block("Coarse Dirt", 3, [1]);
  var podzol            = new Block("Podzol", 3, [2]);
  this.lookup["3"] = [
    dirt, coarseDirt, podzol
  ];

  var cobblestone       = new Block("Cobblestone", 4, [0]);
  this.lookup["4"] = [
    cobblestone
  ];

  var oakWoodPlank      = new Block("Oak Wood Plank", 5, [0]);
  var spruceWoodPlank   = new Block("Spruce Wood Plank", 5, [1]);
  var birchWoodPlank    = new Block("Birch Wood Plank", 5, [2]);
  var jungleWoodPlank   = new Block("Jungle Wood Plank", 5, [3]);
  var acaciaWoodPlank   = new Block("Acacia Wood Plank", 5, [4]);
  var darkOakWoodPlank  = new Block("Dark Oak Wood Plank", 5, [5]);
  this.lookup["5"] = [
    oakWoodPlank, spruceWoodPlank, birchWoodPlank, jungleWoodPlank, 
    acaciaWoodPlank, darkOakWoodPlank
  ];

  var oakSapling        = new Block("Oak Sapling", 6, [0]);
  var spruceSapling     = new Block("Spruce Sapling", 6, [1]);
  var birchSapling      = new Block("Birch Sapling", 6, [2]);
  var jungleSapling     = new Block("Jungle Sapling", 6, [3]);
  var acaciaSapling     = new Block("Acacia Sapling", 6, [4]);
  var darkOakSapling    = new Block("Dark Oak Sapling", 6, [5]);
  this.lookup["6"] = [
    oakSapling, spruceSapling, birchSapling, jungleSapling, 
    acaciaSapling, darkOakSapling
  ];

  var sand              = new Block("Sand", 12, [0]);
  var redSand           = new Block("Red Sand", 12, [1]);
  this.lookup["12"] = [
    sand, redSand
  ];

  var gravel            = new Block("Gravel", 13, [0]);
  this.lookup["13"] = [ gravel ];

  var goldOre           = new Block("Gold Ore", 14, [0]);
  this.lookup["14"] = [ goldOre ];

  var ironOre           = new Block("Iron Ore", 15, [0]);
  this.lookup["15"] = [ ironOre ];

  var coalOre           = new Block("Coal Ore", 16, [0]);
  this.lookup["16"] = [ coalOre ];

  var oakWood           = new Block("Oak Wood", 17, [0,4,8]);
  var spruceWood        = new Block("Spruce Wood", 17, [1,5,9]);
  var birchWood         = new Block("Birch Wood", 17, [2,6,10]);
  var jungleWood        = new Block("Jungle Wood", 17, [3,7,11]);
  this.lookup["17"] = [
    oakWood, spruceWood, birchWood, jungleWood
  ];

  var sponge            = new Block("Sponge", 19, [0]);
  var wetSponge         = new Block("Wet Sponge", 19, [1]);
  this.lookup["19"] = [
    sponge, wetSponge
  ];

  var glass             = new Block("Glass", 20, [0]);
  this.lookup["20"] = [ glass ];

  var lapisLazuliOre    = new Block("Lapis Lazuli Ore", 21, [0]);
  this.lookup["21"] = [ lapisLazuliOre ];

  var lapisLazuliBlock  = new Block("Lapis Lazuli Block", 22, [0]);
  this.lookup["22"] = [ lapisLazuliBlock ];

  var dispenser         = new Block("Dispenser", 23, [0,1,2,3]);
  this.lookup["23"] = [ dispenser ];

  var sandstone         = new Block("Sandstone", 24, [0]);
  var chiseledSandstone = new Block("Chiseled Sandstone", 24, [1]);
  var smoothSandstone   = new Block("Smooth Sandstone", 24, [2]);
  this.lookup["24"] = [
    sandstone, chiseledSandstone, smoothSandstone
  ];

  var noteBlock         = new Block("Note Block", 25, [0]);
  this.lookup["25"] = [ noteBlock ];

  var poweredRail       = new Block("Powered Rail", 27, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  this.lookup["27"] = [ poweredRail ];

  var detectorRail      = new Block("Detector Rail", 28, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  this.lookup["28"] = [ detectorRail ];

  var stickyPiston      = new Block("Sticky Piston", 29, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  this.lookup["29"] = [ stickyPiston ];

  var deadSchrub        = new Block("Dead Shrub", 31, [0]);
  var tallGrass         = new Block("Tall Grass", 31, [1]);
  var fern              = new Block("Fern", 31, [2]);
  this.lookup["31"] = [ 
    deadSchrub, tallGrass, fern 
  ];

  var whiteWool         = new Block("White Wool", 35, [0]);
  var orangeWool        = new Block("Orange Wool", 35, [1]);
  var magentaWool       = new Block("Magenta Wool", 35, [2]);
  var lightBlueWool     = new Block("Light Blue Wool", 35, [3]);
  var yellowWool        = new Block("Yellow Wool", 35, [4]);
  var limeWool          = new Block("Lime Wool", 35, [5]);
  var pinkWool          = new Block("Pink Wool", 35, [6]);
  var grayWool          = new Block("Gray Wool", 35, [7]);
  var lightGrayWool     = new Block("Light Gray Wool", 35, [8]);
  var cyanWool          = new Block("Cyan Wool", 35, [9]);
  var purpleWool        = new Block("Purple Wool", 35, [10]);
  var blueWool          = new Block("Blue Wool", 35, [11]);
  var brownWool         = new Block("Brown Wool", 35, [12]);
  var greenWool         = new Block("Green Wool", 35, [13]);
  var redWool           = new Block("Red Wool", 35, [14]);
  var blackWool         = new Block("Black Wool", 35, [15]);
  this.lookup["35"] = [
    whiteWool, orangeWool, magentaWool, lightBlueWool, 
    yellowWool, limeWool, pinkWool, grayWool, 
    lightGrayWool, cyanWool, purpleWool, blueWool, 
    brownWool, greenWool, redWool, blackWool
  ];

  var dandelion         = new Block("Dandelion", 37, [0]);
  this.lookup["37"] = [ dandelion ];

  var poppy             = new Block("Poppy", 38, [0]);
  var blueOrchid        = new Block("Blue Orchid", 38, [1]);
  var allium            = new Block("Allium", 38, [2]);
  var azureBluet        = new Block("Azure Bluet", 38, [3]);
  var redTulip          = new Block("Red Tulip", 38, [4]);
  var orangeTulip       = new Block("Orange Tulip", 38, [5]);
  var whiteTulip        = new Block("White Tulip", 38, [6]);
  var pinkTulip         = new Block("Pink Tulip", 38, [7]);
  var oxeyeDaisy        = new Block("Oxeye Daisy", 38, [8]);
  this.lookup["38"] = [
    poppy, blueOrchid, allium, azureBluet, 
    redTulip, orangeTulip, whiteTulip, pinkTulip, 
    oxeyeDaisy
  ];

  var brownMushroom     = new Block("Brown Mushroom", 39, [0]);
  this.lookup["39"] = [ brownMushroom ];

  var redMushroom       = new Block("Red Mushroom", 40, [0]);
  this.lookup["40"] = [ redMushroom ];

  var goldBlock         = new Block("Gold Block", 41, [0]);
  this.lookup["41"] = [ goldBlock ];

  var ironBlock         = new Block("Iron Block", 42, [0]);
  this.lookup["42"] = [ ironBlock ];

  var doubleStoneSlab       = new Block("Double Stone Slab", 43, [0]);
  var doubleSandstoneSlab   = new Block("Double Sandstone Slab", 43, [1]);
  var doubleWoodenSlab      = new Block("Double Wooden Slab", 43, [2]);
  var doubleCobblestoneSlab = new Block("Double Cobblestone Slab", 43, [3]);
  var doubleBrickSlab       = new Block("Double Brick Slab", 43, [4]);
  var doubleStoneBrickSlab  = new Block("Double Stone Brick Slab", 43, [5]);
  var doubleNetherBrickSlab = new Block("Double Nether Brick Slab", 43, [6]);
  var doubleQuartzSlab      = new Block("Double Quartz Slab", 43, [7]);
  this.lookup["43"] = [
    doubleStoneSlab, doubleSandstoneSlab, doubleWoodenSlab, doubleCobblestoneSlab,
    doubleBrickSlab, doubleStoneBrickSlab, doubleNetherBrickSlab, doubleQuartzSlab
  ];

  var stoneSlab          = new Block("Stone Slab", 44, [0, 8]);
  var sandstoneSlab      = new Block("Sandstone Slab", 44, [1, 9]);
  var woodenSlab         = new Block("Wooden Slab", 44, [2, 10]);
  var cobblestoneSlab    = new Block("Cobblestone Slab", 44, [3, 11]);
  var brickSlab          = new Block("Brick Slab", 44, [4, 12]);
  var stoneBrickSlab     = new Block("Stone Brick Slab", 44, [5, 13]);
  var netherBrickSlab    = new Block("Nether Brick Slab", 44, [6, 14]);
  var quartzSlab         = new Block("Quartz Slab", 44, [7, 15]);
  this.lookup["44"] = [
    stoneSlab, sandstoneSlab, woodenSlab, cobblestoneSlab, 
    brickSlab, stoneBrickSlab, netherBrickSlab, quartzSlab
  ];

  var bricks             = new Block("Bricks", 45, [0]);
  this.lookup["45"] = [ bricks ];

  var tnt                = new Block("TNT", 46, [0]);
  this.lookup["46"] = [ tnt ];

  var bookshelf          = new Block("Bookshelf", 47, [0]);
  this.lookup["47"] = [ bookshelf ];

  var mossStone          = new Block("Moss Stone", 48, [0]);
  this.lookup["48"] = [ mossStone ];

  var obsidian           = new Block("Obsidian", 49, [0]);
  this.lookup["49"] = [ obsidian ];

  var torch              = new Block("Torch", 50, [0, 1, 2, 3, 4]);
  this.lookup["50"] = [ torch ];

  var oakWoodStairs      = new Block("Oak Wood Stairs", 53, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  this.lookup["53"] = [ oakWoodStairs ];

  var chest              = new Block("Chest", 54, [0]);
  this.lookup["54"] = [ chest ];

  var redstoneWire       = new Block("Redstone Wire", 55, [0,1,2,3,4,5,6,7,8,9]);
  this.lookup["55"] = [ redstoneWire ];

  var diamondOre         = new Block("Diamond Ore", 56, [0]);
  this.lookup["56"] = [ diamondOre ];

  var diamondBlock       = new Block("Diamond Block", 57, [0]);
  this.lookup["57"] = [ diamondBlock ];

  var craftingTable      = new Block("Crafting Table", 58, [0]);
  this.lookup["58"] = [ craftingTable ];

  var wheatCrops         = new Block("Wheat Crops", 59, [0]);
  this.lookup["59"] = [ wheatCrops ];

  var farmland           = new Block("Farmland", 60, [0]);
  this.lookup["60"] = [ farmland ];

  var furnace            = new Block("Furnace", 61, [0,1,2,3]);
  this.lookup["61"] = [ furnace ];

  var burningFurnace     = new Block("Burning Furnace", 62, [0]);
  this.lookup["62"] = [ burningFurnace ];

  var standingSign       = new Block("Standing Sign", 63, [0, 1, 2, 3]);
  this.lookup["63"] = [ standingSign ];

  var oakDoor            = new Block("Oak Door", 64, [0, 1, 2, 3]);
  this.lookup["64"] = [ oakDoor ];

  var ladder             = new Block("Ladder", 65, [0, 1, 2, 3]);
  this.lookup["65"] = [ ladder ];

  var rail               = new Block("Rail", 66, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  this.lookup["66"] = [ rail ];

  var cobblestoneStairs  = new Block("Cobblestone Stairs", 67, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  this.lookup["67"] = [ cobblestoneStairs ];

  var wallmountedSign    = new Block("Wall-mounted Sign Block", 68, [0, 1, 2, 3]);
  this.lookup["68"] = [ wallmountedSign ];

  var lever              = new Block("Lever", 69, [0,1,2,3,4,5,6,7,8,9]);
  this.lookup["69"] = [ lever ];

  var stonePressurePlate = new Block("Stone Pressure Plate", 70, [0]);
  this.lookup["70"] = [ stonePressurePlate ];

  var ironDoor           = new Block("Iron Door", 71, [0, 1, 2, 3]);
  this.lookup["71"] = [ ironDoor ];

  var woodenPressurePlate = new Block("Wooden Pressure Plate", 72, [0]);
  this.lookup["72"] = [ woodenPressurePlate ];

  var redstoneOre = new Block("Redstone Ore", 73, [0]);
  this.lookup["73"] = [ redstoneOre ];

  var glowingRedstoneOre = new Block("Glowing Redstone Ore", 74, [0]);
  this.lookup["74"] = [ glowingRedstoneOre ];

  var redstoneTorchOff = new Block("Redstone Torch Off", 75, [0,1,2,3,4,5,6,7,8,9]);
  this.lookup["75"] = [ redstoneTorchOff ];

  var redstoneTorchOn = new Block("Redstone Torch On", 76, [0,1,2,3,4,5,6,7,8,9]);
  this.lookup["76"] = [ redstoneTorchOn ];

  var stoneButton = new Block("Stone Button", 77, [0,1,2,3]);
  this.lookup["77"] = [ stoneButton ];

  var snow = new Block("Snow", 78, [0]);
  this.lookup["78"] = [ snow ];

  var ice = new Block("Ice", 79, [0]);
  this.lookup["79"] = [ ice ];

  var snowblock = new Block("Snow Block", 80, [0]);
  this.lookup["80"] = [ snowblock ];

  var cactus = new Block("Cactus", 81, [0]);
  this.lookup["81"] = [ cactus ];

  var clay = new Block("Clay", 82, [0]);
  this.lookup["82"] = [ clay ];

  var sugarCane = new Block("Sugar Cane", 83, [0]);
  this.lookup["83"] = [ sugarCane ];

  var jukebox = new Block("Jukebox", 84, [0]);
  this.lookup["84"] = [ jukebox ];

  var oakFence = new Block("Oak Fence", 85, [0,1,2,3,4,5,6,7,8,9]);
  this.lookup["85"] = [ oakFence ];

  var pumpkin = new Block("Pumpkin", 86, [0, 1, 2, 3]);
  this.lookup["86"] = [ pumpkin ];

  var netherrack = new Block("Netherrack", 87, [0]);
  this.lookup["87"] = [ netherrack ];

  var soulSand = new Block("Soul Sand", 88, [0]);
  this.lookup["88"] = [ soulSand ];

  var glowstone = new Block("Glowstone", 89, [0]);
  this.lookup["89"] = [ glowstone ];

  var jackolatern = new Block("Jack o'Latern", 91, [0]);
  this.lookup["91"] = [ jackolatern ];

  var cakeBlock = new Block("Cake Block", 92, [0]);
  this.lookup["92"] = [ cakeBlock ];

  var redstoneRepeaterOff = new Block("Redstone Repeater (Off)", 93, [0]);
  this.lookup["93"] = [ redstoneRepeaterOff ];

  var redstoneRepeaterOn = new Block("Redstone Repeater (On)", 94, [0]);
  this.lookup["94"] = [ redstoneRepeaterOn ];

  var whiteStainedGlass = new Block("White Stained Glass", 95, [0]);
  var orangeStainedGlass = new Block("Orange Stained Glass", 95, [1]);
  var magentaStainedGlass = new Block("Magenta Stained Glass", 95, [2]);
  var lightBlueStainedGlass = new Block("Light Blue Stained Glass", 95, [3]);
  var yellowStainedGlass = new Block("Yellow Stained Glass", 95, [4]);
  var limeStainedGlass = new Block("Lime Stained Glass", 95, [5]);
  var pinkStainedGlass = new Block("Pink Stained Glass", 95, [6]);
  var grayStainedGlass = new Block("Gray Stained Glass", 95, [7]);
  var lightGrayStainedGlass = new Block("Light Gray Stained Glass", 95, [8]);
  var cyanStainedGlass = new Block("Cyan Stained Glass", 95, [9]);
  var purpleStainedGlass = new Block("Purple Stained Glass", 95, [10]);
  var blueStainedGlass = new Block("Blue Stained Glass", 95, [11]);
  var brownStainedGlass = new Block("Brown Stained Glass", 95, [12]);
  var greenStainedGlass = new Block("Green Stained Glass", 95, [13]);
  var redStainedGlass = new Block("Red Stained Glass", 95, [14]);
  var blackStainedGlass = new Block("Black Stained Glass", 95, [15]);
  this.lookup["95"] = [
    whiteStainedGlass, orangeStainedGlass, magentaStainedGlass, lightBlueStainedGlass,
    yellowStainedGlass, limeStainedGlass, pinkStainedGlass, grayStainedGlass,
    lightGrayStainedGlass, cyanStainedGlass, purpleStainedGlass, blueStainedGlass,
    brownStainedGlass, greenStainedGlass, redStainedGlass, blackStainedGlass  
  ]; 

  var woodenTrapdoor = new Block("Wooden Trapdoor", 96, [0]);
  this.lookup["96"] = [ woodenTrapdoor ];

  var stoneBricks = new Block("Stone Bricks", 98, [0]);
  var mossyStoneBricks = new Block("Mossy Stone Bricks", 98, [1]);
  var crackedStoneBricks = new Block("Cracked Stone Bricks", 98, [2]);
  var chiseledStoneBricks = new Block("Chiseled Stone Bricks", 98, [3]);
  this.lookup["98"] = [
    stoneBricks, mossyStoneBricks, crackedStoneBricks, chiseledStoneBricks
  ];

  var ironBars = new Block("Iron Bars", 101, [0]);
  this.lookup["101"] = [ ironBars ];

  var glassPane = new Block("Glass Pane", 102, [0]);
  this.lookup["102"] = [ glassPane ];

  var melonBlock = new Block("Melon Block", 103, [0]);
  this.lookup["103"] = [ melonBlock ];

  var pumpkinStem = new Block("Pumpkin Stem", 104, [0]);
  this.lookup["104"] = [ pumpkinStem ];

  var melonStem = new Block("Melon Stem", 105, [0]);
  this.lookup["105"] = [ melonStem ];

  var vines = new Block("Vines", 106, [0, 1]);
  this.lookup["106"] = [ vines ];

  var oakFenceGate = new Block("Oak Fence Gate", 107, [0, 1, 2, 3]);
  this.lookup["107"] = [ oakFenceGate ];

  var brickStairs = new Block("Brick Stairs", 108, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  this.lookup["108"] = [ brickStairs ];

  var stoneBrickStairs = new Block("Stone Brick Stairs", 109, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  this.lookup["109"] = [ stoneBrickStairs ];

  var mycelium = new Block("Mycelium", 110, [0]);
  this.lookup["110"] = [ mycelium ];

  var lilyPad = new Block("Lily Pad", 111, [0]);
  this.lookup["111"] = [ lilyPad ];

  var netherBrick = new Block("Nether Brick", 112, [0]);
  this.lookup["112"] = [ netherBrick ];

  var netherBrickFence = new Block("Nether Brick Fence", 113, [0,1,2,3,4,5,6,7,8,9]);
  this.lookup["113"] = [ netherBrickFence ];

  var netherBrickStairs = new Block("Nether Brick Stairs", 114, [0,1,2,3,4,5,6,7,8,9]);
  this.lookup["114"] = [ netherBrickStairs ];

  var netherWart = new Block("Nether Wart", 115, [0,1,2,3,4]);
  this.lookup["115"] = [ netherWart ];

  var enchantmentTable = new Block("Enchantment Table", 116, [0]);
  this.lookup["116"] = [ enchantmentTable ];

}

Blocks.prototype.get = function( id, data ) {
  var key = '' + id; 
  var lu = this.lookup[key];
  if ( lu !== undefined ) {
    for( var i = 0; i < lu.length; i++ ) {
      var ludata = lu[i].data;
      for( var e = 0; e < ludata.length; e++ ) {
        if ( ludata[e] === data ) {
          return lu[i];
        }
      }
    }
  }
  return false;
}

Blocks.prototype.output = function( ) {
  var output = [];
  var keys = Object.keys(this.lookup);
  for( var k = 0; k < keys.length; k++ ) {
    var set = this.lookup[keys[k]];
    for ( var i = 0; i < set.length; i++ ) {
      var nb = {
        id : set[i].id,
        data : set[i].data[0],
        name : set[i].name,
        placed : set[i].placed,
        broken : set[i].broken
      };
      output.push(nb);
    }
  }
  return output;
}

module.exports = {
  create : function () { return new Blocks(); }
}

