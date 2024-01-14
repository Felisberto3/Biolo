-- AlterTable
ALTER TABLE `post` MODIFY `stage` ENUM('sold', 'onSell') NULL DEFAULT 'onSell';
