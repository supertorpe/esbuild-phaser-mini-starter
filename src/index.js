import { FirstGameScene } from './first-scene';
import Phaser from 'phaser';

const config/*: Phaser.Types.Core.GameConfig*/ = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'game-container',
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 300 },
        debug: false
      }
    },
    scene: [FirstGameScene]
  };

new Phaser.Game(config);