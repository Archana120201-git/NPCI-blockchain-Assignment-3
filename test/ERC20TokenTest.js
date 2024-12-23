const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ERC20Token", function () {
    let token, owner, addr1, addr2;

    beforeEach(async function () {
        const ERC20Token = await ethers.getContractFactory("ERC20Token");
        token = await ERC20Token.deploy(ethers.utils.parseEther("1000000")); // 1 million tokens
        [owner, addr1, addr2] = await ethers.getSigners();
    });

    it("Should assign total supply to the owner", async function () {
        const ownerBalance = await token.balanceOf(owner.address);
        expect(await token.totalSupply()).to.equal(ownerBalance);
    });

    it("Should transfer tokens between accounts", async function () {
        await token.transfer(addr1.address, ethers.utils.parseEther("100"));
        expect(await token.balanceOf(addr1.address)).to.equal(ethers.utils.parseEther("100"));
    });

    it("Should approve and transferFrom", async function () {
        await token.approve(addr1.address, ethers.utils.parseEther("100"));
        await token.connect(addr1).transferFrom(owner.address, addr2.address, ethers.utils.parseEther("100"));
        expect(await token.balanceOf(addr2.address)).to.equal(ethers.utils.parseEther("100"));
    });
});
