<?php
namespace Magento\MediaStorage\Model\File\Validator\NotProtectedExtension;

/**
 * Interceptor class for @see \Magento\MediaStorage\Model\File\Validator\NotProtectedExtension
 */
class Interceptor extends \Magento\MediaStorage\Model\File\Validator\NotProtectedExtension implements \Magento\Framework\Interception\InterceptorInterface
{
    use \Magento\Framework\Interception\Interceptor;

    public function __construct(\Magento\Framework\App\Config\ScopeConfigInterface $scopeConfig)
    {
        $this->___init();
        parent::__construct($scopeConfig);
    }

    /**
     * {@inheritdoc}
     */
    public function getProtectedFileExtensions($store = null)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'getProtectedFileExtensions');
        return $pluginInfo ? $this->___callPlugins('getProtectedFileExtensions', func_get_args(), $pluginInfo) : parent::getProtectedFileExtensions($store);
    }
}
