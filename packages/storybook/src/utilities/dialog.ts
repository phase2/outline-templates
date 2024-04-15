// code adopted from https://web.dev/building-a-dialog-component/#all-together

// custom events to be added to <dialog>
const dialogClosingEvent = new Event('closing');
const dialogClosedEvent = new Event('closed');
const dialogOpeningEvent = new Event('opening');
const dialogOpenedEvent = new Event('opened');
const dialogRemovedEvent = new Event('removed');

// track opening
const dialogAttrObserver = new MutationObserver(mutations => {
  mutations.forEach(async mutation => {
    if (mutation.attributeName === 'open') {
      const dialog = mutation.target as HTMLDialogElement;

      const isOpen = dialog.hasAttribute('open');
      if (!isOpen) return;

      // Limited browser support for inert yet, alternatively we add overflow: hidden to body element
      document.querySelector('body')!.style.overflow = 'hidden';

      // set focus
      const focusTarget = dialog.querySelector(
        '[autofocus]'
      ) as HTMLDialogElement;
      focusTarget
        ? focusTarget.focus()
        : dialog.querySelector('button')?.focus();

      dialog.dispatchEvent(dialogOpeningEvent);
      await animationsComplete(dialog);
      dialog.dispatchEvent(dialogOpenedEvent);
    }
  });
});

// track deletion
const dialogDeleteObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    mutation.removedNodes.forEach(removedNode => {
      if (removedNode.nodeName === 'DIALOG') {
        removedNode.removeEventListener('click', lightDismiss);
        removedNode.removeEventListener('close', dialogClose);
        removedNode.dispatchEvent(dialogRemovedEvent);
      }
    });
  });
});

// wait for all dialog animations to complete their promises
const animationsComplete = (element: HTMLDialogElement) =>
  Promise.allSettled(
    element.getAnimations().map(animation => animation.finished)
  );

// click outside the dialog handler

const lightDismiss = ({ target: dialog }: Event) => {
  const element = dialog as HTMLDialogElement;
  if (element.nodeName === 'DIALOG') {
    element.close('dismiss');
  }
};

const dialogClose = async ({ target: dialog }: Event) => {
  document.querySelector('body')!.style.overflow = 'revert';
  const element = dialog as HTMLDialogElement;

  element.dispatchEvent(dialogClosingEvent);

  await animationsComplete(element);

  element.dispatchEvent(dialogClosedEvent);
};

// page load dialogs setup
export default async function (dialog: HTMLDialogElement) {
  dialog.addEventListener('click', lightDismiss);
  dialog.addEventListener('close', dialogClose);

  // Chrome doesn't close dialog with ESCAPE key, adding that functionality manually
  dialog.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      dialog.close('cancel');
    }
  });

  dialogAttrObserver.observe(dialog, {
    attributes: true,
  });

  dialogDeleteObserver.observe(document.body, {
    attributes: false,
    subtree: false,
    childList: true,
  });

  // remove loading attribute
  // prevent page load @keyframes playing
  await animationsComplete(dialog);
  dialog.removeAttribute('loading');
}
