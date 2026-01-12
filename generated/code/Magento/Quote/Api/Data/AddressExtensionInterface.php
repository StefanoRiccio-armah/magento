<?php
namespace Magento\Quote\Api\Data;

/**
 * ExtensionInterface class for @see \Magento\Quote\Api\Data\AddressInterface
 */
interface AddressExtensionInterface extends \Magento\Framework\Api\ExtensionAttributesInterface
{
    /**
     * @return string|null
     */
    public function getPickupLocationCode();

    /**
     * @param string $pickupLocationCode
     * @return $this
     */
    public function setPickupLocationCode($pickupLocationCode);

    /**
     * @return \Magento\SalesRule\Api\Data\RuleDiscountInterface[]|null
     */
    public function getDiscounts();

    /**
     * @param \Magento\SalesRule\Api\Data\RuleDiscountInterface[] $discounts
     * @return $this
     */
    public function setDiscounts($discounts);

    /**
     * @return string|null
     */
    public function getKlSmsConsent();

    /**
     * @param string $klSmsConsent
     * @return $this
     */
    public function setKlSmsConsent($klSmsConsent);

    /**
     * @return string|null
     */
    public function getKlEmailConsent();

    /**
     * @param string $klEmailConsent
     * @return $this
     */
    public function setKlEmailConsent($klEmailConsent);
}
