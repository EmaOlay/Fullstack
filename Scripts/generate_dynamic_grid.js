let vec = ["A Fairytale for the Demon Lord.jpg",
"A Returner_s Magic should be special.jpg",
"A Wonderful new World.jpg",
"Arachnid.jpg",
"Arifureta .jpg",
"Black Clover.jpg",
"Blue Lock.png",
"Chronicles Of Heavenly Demon.webp",
"Dead Tube.jpg",
"Death March to the Paralled World Rhapsody.jpg",
"Demon Kings Town Planning! The Strongest Dungeon is a Modern City(1).webp",
"Dokumushi.jpg",
"Dr. Stone.webp",
"Dungeon Reset.jpg",
"Fairy King_s Daily Life.jpg",
"Girls Of the wild.jpg",
"Gleipnir.jpg",
"Goblin Slayer.jpg",
"God of Blackfield.jpg",
"Hardcore Leveling Warrior.webp",
"How A Realist hero Rebuilt the kingdom.jpg",
"Infinite Dendrogram.webp",
"Interspecies Reviewers.jpg",
"In_Spectre.jpg",
"Is It Wrong to try to pick up girls in a dungeon.jpg",
"Jujutsu Kaisen.webp",
"Kemono Jihen.jpg",
"Kenja No Mago.jpg",
"Kill The Hero.webp",
"Leveling With The Gods.jpg",
"LV999 No Murabito.jpg",
"Mieruko-chan.jpg",
"Monster Musume no Oisha-san.jpg",
"Monster_8.jpg",
"Muerte no escrita.jpg",
"Mushoku Tensei.webp",
"My Hero Academia.jpg",
"My Wife Is a Demon Queen.jpg",
"Omniscient Reader_s Viewpoint.jpg",
"Overgeared.webp",
"Overlord.jpg",
"Painkiller.jpg",
"Parallel Paradise.webp",
"Past Life Regressor.jpg",
"Record Of Ragnarok.webp",
"Redo Of Healer.webp",
"Reincarnation of the Suicidal Battle God.png",
"Return To Player.webp",
"Second Life ranker.jpg",
"Shikkaku Mon No Saikyou Kenja.webp",
"So I-m a spider so what.jpg",
"SSS-Class Suicide Hunter.webp",
"Survival Story of a Sword King in a Fantasy World.webp",
"Tacit.webp",
"Taming Master.webp",
"That Time I got reincarnated as a slime.jpg",
"The Beginning After the End.jpg",
"The Breaker.jpg",
"The Death Mage who doesn_t want a fourth time.png",
"The Elder Sister-like One.jpg",
"The Eminence In shadow.jpg",
"The Gamer.jpg",
"The God of highschool.jpg",
"The Great Mage Returns After 4000 Years.webp",
"The Lord_s Coins Aren_t Decreasing.jpg",
"The Player that can_t Level Up.jpg",
"The return of the disaster class hero.png",
"The Tower of god.webp",
"The Tutorial Tower of the Advanced Player.webp",
"Tomb Raider King.jpg",
"Tsuki ga Michibiku Isekai Douchuu.webp",
"UQ Holder.jpg",
"Villain To Kill.jpg",
"Warble.webp",
"Your Talent is Mine.jpg"];
let chain = "";
for(let i = 0; i<vec.length;i++){
    //console.log(vec[i]);
    chain+= `<li class="img_grid_li"><img class="img_grid" src="./Images/covers/`+vec[i]+`" alt=""></li>`;
    //console.log(chain);
}

let img_grid_ul =document.getElementsByClassName('img_grid_ul');
img_grid_ul[0].innerHTML= chain;