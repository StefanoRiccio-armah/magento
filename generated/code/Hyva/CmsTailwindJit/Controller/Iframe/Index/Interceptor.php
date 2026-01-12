<?php
namespace Hyva\CmsTailwindJit\Controller\Iframe\Index;

/**
 * Interceptor class for @see \Hyva\CmsTailwindJit\Controller\Iframe\Index
 */
class Interceptor extends \Hyva\CmsTailwindJit\Controller\Iframe\Index implements \Magento\Framework\Interception\InterceptorInterface
{
    use \Magento\Framework\Interception\Interceptor;

    public function __construct(\Magento\Framework\Controller\Result\RawFactory $rawFactory, \Magento\Framework\View\LayoutInterface $layout)
    {
        $this->___init();
        parent::__construct($rawFactory, $layout);
    }

    /**
     * {@inheritdoc}
     */
    public function execute()
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'execute');
        return $pluginInfo ? $this->___callPlugins('execute', func_get_args(), $pluginInfo) : parent::execute();
    }
}
