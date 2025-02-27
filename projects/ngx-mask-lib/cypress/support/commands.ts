declare namespace Cypress {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	interface Chainable {
		setSelectionRange(start: number, end: number): Chainable<JQuery<HTMLInputElement>>;
	}
}

Cypress.Commands.add('setSelectionRange', { prevSubject: 'element' }, (subject, start, end) => {
	return cy.wrap(subject).then(($el: JQuery<HTMLInputElement>) => {
		$el[0]?.setSelectionRange(start, end);
	});
});
