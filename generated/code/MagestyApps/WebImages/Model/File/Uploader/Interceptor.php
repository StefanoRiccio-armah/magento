<?php
namespace MagestyApps\WebImages\Model\File\Uploader;

/**
 * Interceptor class for @see \MagestyApps\WebImages\Model\File\Uploader
 */
class Interceptor extends \MagestyApps\WebImages\Model\File\Uploader implements \Magento\Framework\Interception\InterceptorInterface
{
    use \Magento\Framework\Interception\Interceptor;

    public function __construct(\MagestyApps\WebImages\Helper\ImageHelper $imageHelper, string $fileId, ?\Magento\Framework\File\Mime $fileMime = null, ?\Magento\Framework\App\Filesystem\DirectoryList $directoryList = null, ?\Magento\Framework\Filesystem\DriverPool $driverPool = null, ?\Magento\Framework\Filesystem\Directory\TargetDirectory $targetDirectory = null, ?\Magento\Framework\Filesystem $filesystem = null)
    {
        $this->___init();
        parent::__construct($imageHelper, $fileId, $fileMime, $directoryList, $driverPool, $targetDirectory, $filesystem);
    }

    /**
     * {@inheritdoc}
     */
    public function save($destinationFolder, $newFileName = null)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'save');
        return $pluginInfo ? $this->___callPlugins('save', func_get_args(), $pluginInfo) : parent::save($destinationFolder, $newFileName);
    }
}
